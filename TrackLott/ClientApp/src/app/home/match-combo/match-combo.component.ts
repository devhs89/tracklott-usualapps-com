import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CombinationsService} from "../../services/combinations.service";
import {Observable, Subscription} from "rxjs";
import {LottoResultService} from "../../services/lotto-result.service";
import {AccountService} from "../../services/account.service";
import {take} from "rxjs/operators";
import {MatchingCombo, MatchingComboResult} from "../../models/matching-combo";
import {PickedNumbers} from "../../models/combination";
import {DeviceBreakpointService} from "../../services/device-breakpoint.service";
import {Breakpoints} from "@angular/cdk/layout";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {LottoResult} from "../../models/lotto-result";

@Component({
  selector: 'app-match-combo',
  templateUrl: './match-combo.component.html',
  styleUrls: ['./match-combo.component.scss']
})
export class MatchComboComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isHandset$: Observable<boolean>;
  latestLottoResult$: Observable<LottoResult | null>;
  latestLottoResult: LottoResult;
  matchingCombos: MatchingCombo[] = [];
  matchingCombosSliced: MatchingCombo[] = [];
  tableColumns = ["mainNums", "drawDate"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  datasource: MatTableDataSource<MatchingCombo>;
  paginatorDefaultPageSize: number = 5;

  constructor(private deviceBreakpointService: DeviceBreakpointService, private lottoResultService: LottoResultService, private accountService: AccountService, private combinationsService: CombinationsService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.deviceBreakpointService.handsetBreakpoint(Breakpoints.XSmall);
    this.latestLottoResult$ = this.lottoResultService.latestLottoResult$;

    this.accountService.appUser$.pipe(take(1)).subscribe(userToken => {
      if (userToken?.token) {

        this.lottoResultService.latestLottoResult$.pipe(take(1)).subscribe({
          next: lottoResult => {
            if (lottoResult?.drawName) {
              this.latestLottoResult = lottoResult;
              if (lottoResult.drawName === "powerball") this.tableColumns.push("jackpot");

              this.subscriptions.push(
                this.combinationsService.matchCombinations(lottoResult.drawName)
                  .subscribe(value => {
                    this.matchingCombos = this.parseMatchingCombos(value, lottoResult);
                    this.paginateData();
                  })
              );
            }
          }
        });
      }
    });
  }

  pageSize(event: PageEvent) {
    this.matchingCombosSliced = this.matchingCombos.slice((event.pageIndex * event.pageSize), (event.pageSize * (event.pageIndex + 1)));
  }

  private parseMatchingCombos(value: MatchingComboResult[], lottoResult: LottoResult): MatchingCombo[] {
    let parsedMatchingCombos: MatchingCombo[] = [];

    value.forEach(result => {
      const dateStr = new Date(result.dateAdded);

      JSON.parse(result.pickedNumbers).forEach((numObj: PickedNumbers) => {
        const winningNums = lottoResult.winningNumbers.map(Number);
        const pickedMainNums = numObj.mainNums.map(Number);
        const totalMatches = this.findTotalMatches(pickedMainNums, winningNums);

        parsedMatchingCombos.push({
          dateAdded: dateStr.toDateString(),
          mainNums: pickedMainNums,
          jackpot: numObj.jackpot,
          matches: totalMatches
        });
      });
    });
    return parsedMatchingCombos;
  }

  private paginateData() {
    this.subscriptions.push(
      this.isHandset$.subscribe(value => {
        if (value) {
          this.matchingCombosSliced = this.matchingCombos.slice(0, this.matchingCombos.length < this.paginatorDefaultPageSize ? this.matchingCombos.length : this.paginatorDefaultPageSize);
        } else {
          this.datasource = new MatTableDataSource<MatchingCombo>(this.matchingCombos);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
        }
      })
    );
  }

  private findTotalMatches(mainNums: number[], winningNums: number[]) {
    let totalMatches = 0;
    mainNums.forEach(num => {
      if (winningNums.indexOf(num) >= 0) {
        totalMatches++;
      }
    });
    return totalMatches;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
