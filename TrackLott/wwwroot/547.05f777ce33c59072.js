"use strict";(self.webpackChunkTrackLott=self.webpackChunkTrackLott||[]).push([[547],{5547:(Y,C,n)=>{n.r(C),n.d(C,{AccountModule:()=>K});var b=n(1083),l=n(3075),v=n(7727),e=n(5e3),p=n(1297),g=n(9876),f=n(6324),d=n(9224),h=n(4834),u=n(7322),Z=n(7531),w=n(7446),T=n(7423),m=n(9808),y=n(773);function M(t,i){1&t&&(e.TgZ(0,"div",9),e._UZ(1,"mat-spinner",10),e.qZA())}let N=(()=>{class t{constructor(a,r,o,s){this.loadingService=a,this.accountService=r,this.router=o,this.snackBarService=s,this.isLoading$=this.loadingService.isLoading$}ngOnInit(){this.loginForm=new l.cw({email:new l.NI(null,l.kI.required),password:new l.NI(null,l.kI.required),rememberMe:new l.NI(!1,l.kI.pattern("true|false"))})}onLoginSubmit(){if(this.loginForm.valid){let a=Object.assign({},this.loginForm.value);this.accountService.onLogin(a).subscribe({next:()=>{this.router.navigate([v.H.homeAbs])},error:r=>this.snackBarService.showSnackBar(r.error)})}}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(p.u),e.Y36(g.B),e.Y36(b.F0),e.Y36(f.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:24,vars:4,consts:[[1,"row","col-md-7","mx-auto","mat-elevation-z6"],["inset","",1,"my-3"],[1,"row",3,"formGroup","ngSubmit"],["appearance","outline"],["email","","formControlName","email","matInput","","pattern","(?:^|\\s)[\\w!#$%&'*+/=?^`{|}~-](\\.?[\\w!#$%&'*+/=?^`{|}~-]+)*@\\w+[.-]?\\w*\\.[a-zA-Z]{2,3}\\b","required","","type","email",1,"mat-typography"],["formControlName","password","matInput","","placeholder","Enter your password","required","","type","password"],["name","rememberMe"],["color","primary","mat-flat-button","","type","submit",1,"w-50","mb-3","mx-auto","text-uppercase"],["class","spinnerOverlay",4,"ngIf"],[1,"spinnerOverlay"],["color","accent","diameter","50"]],template:function(a,r){1&a&&(e.TgZ(0,"mat-card",0)(1,"mat-card-title"),e._uU(2,"Login"),e.qZA(),e._UZ(3,"mat-divider",1),e.TgZ(4,"mat-card-content")(5,"form",2),e.NdJ("ngSubmit",function(){return r.onLoginSubmit()}),e.TgZ(6,"mat-form-field",3)(7,"mat-label"),e._uU(8,"Email Address"),e.qZA(),e._UZ(9,"input",4),e.TgZ(10,"mat-error"),e._uU(11,"Invalid email address"),e.qZA()(),e.TgZ(12,"mat-form-field",3)(13,"mat-label"),e._uU(14,"Password"),e.qZA(),e._UZ(15,"input",5),e.TgZ(16,"mat-error"),e._uU(17,"Invalid password"),e.qZA()(),e.TgZ(18,"mat-checkbox",6),e._uU(19,"Remember Me"),e.qZA(),e.TgZ(20,"button",7),e._uU(21,"Login"),e.qZA()()()(),e.YNc(22,M,2,0,"div",8),e.ALo(23,"async")),2&a&&(e.xp6(5),e.Q6J("formGroup",r.loginForm),e.xp6(17),e.Q6J("ngIf",e.lcZ(23,2,r.isLoading$)))},directives:[d.a8,d.n5,h.d,d.dn,l._Y,l.JL,l.sg,u.KE,u.hX,l.Fj,Z.Nt,l.on,l.JJ,l.u,l.c5,l.Q7,u.TO,w.oG,T.lW,m.O5,y.Ou],pipes:[m.Ov],styles:[""]}),t})();const P=[{label:"Afghanistan",value:"AF"},{label:"\xc5land Islands",value:"AX"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"American Samoa",value:"AS"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Anguilla",value:"AI"},{label:"Antarctica",value:"AQ"},{label:"Antigua and Barbuda",value:"AG"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Aruba",value:"AW"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"},{label:"Bahamas",value:"BS"},{label:"Bahrain",value:"BH"},{label:"Bangladesh",value:"BD"},{label:"Barbados",value:"BB"},{label:"Belarus",value:"BY"},{label:"Belgium",value:"BE"},{label:"Belize",value:"BZ"},{label:"Benin",value:"BJ"},{label:"Bermuda",value:"BM"},{label:"Bhutan",value:"BT"},{label:"Bolivia",value:"BO"},{label:"Bosnia and Herzegovina",value:"BA"},{label:"Botswana",value:"BW"},{label:"Bouvet Island",value:"BV"},{label:"Brazil",value:"BR"},{label:"British Indian Ocean Territory",value:"IO"},{label:"Brunei Darussalam",value:"BN"},{label:"Bulgaria",value:"BG"},{label:"Burkina Faso",value:"BF"},{label:"Burundi",value:"BI"},{label:"Cambodia",value:"KH"},{label:"Cameroon",value:"CM"},{label:"Canada",value:"CA"},{label:"Cape Verde",value:"CV"},{label:"Cayman Islands",value:"KY"},{label:"Central African Republic",value:"CF"},{label:"Chad",value:"TD"},{label:"Chile",value:"CL"},{label:"China",value:"CN"},{label:"Christmas Island",value:"CX"},{label:"Cocos (Keeling) Islands",value:"CC"},{label:"Colombia",value:"CO"},{label:"Comoros",value:"KM"},{label:"Congo",value:"CG"},{label:"Congo, The Democratic Republic of the",value:"CD"},{label:"Cook Islands",value:"CK"},{label:"Costa Rica",value:"CR"},{label:"Cote D'Ivoire",value:"CI"},{label:"Croatia",value:"HR"},{label:"Cuba",value:"CU"},{label:"Cyprus",value:"CY"},{label:"Czech Republic",value:"CZ"},{label:"Denmark",value:"DK"},{label:"Djibouti",value:"DJ"},{label:"Dominica",value:"DM"},{label:"Dominican Republic",value:"DO"},{label:"Ecuador",value:"EC"},{label:"Egypt",value:"EG"},{label:"El Salvador",value:"SV"},{label:"Equatorial Guinea",value:"GQ"},{label:"Eritrea",value:"ER"},{label:"Estonia",value:"EE"},{label:"Ethiopia",value:"ET"},{label:"Falkland Islands (Malvinas)",value:"FK"},{label:"Faroe Islands",value:"FO"},{label:"Fiji",value:"FJ"},{label:"Finland",value:"FI"},{label:"France",value:"FR"},{label:"French Guiana",value:"GF"},{label:"French Polynesia",value:"PF"},{label:"French Southern Territories",value:"TF"},{label:"Gabon",value:"GA"},{label:"Gambia",value:"GM"},{label:"Georgia",value:"GE"},{label:"Germany",value:"DE"},{label:"Ghana",value:"GH"},{label:"Gibraltar",value:"GI"},{label:"Greece",value:"GR"},{label:"Greenland",value:"GL"},{label:"Grenada",value:"GD"},{label:"Guadeloupe",value:"GP"},{label:"Guam",value:"GU"},{label:"Guatemala",value:"GT"},{label:"Guernsey",value:"GG"},{label:"Guinea",value:"GN"},{label:"Guinea-Bissau",value:"GW"},{label:"Guyana",value:"GY"},{label:"Haiti",value:"HT"},{label:"Heard Island and Mcdonald Islands",value:"HM"},{label:"Holy See (Vatican City State)",value:"VA"},{label:"Honduras",value:"HN"},{label:"Hong Kong",value:"HK"},{label:"Hungary",value:"HU"},{label:"Iceland",value:"IS"},{label:"India",value:"IN"},{label:"Indonesia",value:"ID"},{label:"Iran, Islamic Republic Of",value:"IR"},{label:"Iraq",value:"IQ"},{label:"Ireland",value:"IE"},{label:"Isle of Man",value:"IM"},{label:"Israel",value:"IL"},{label:"Italy",value:"IT"},{label:"Jamaica",value:"JM"},{label:"Japan",value:"JP"},{label:"Jersey",value:"JE"},{label:"Jordan",value:"JO"},{label:"Kazakhstan",value:"KZ"},{label:"Kenya",value:"KE"},{label:"Kiribati",value:"KI"},{label:"Democratic People's Republic of Korea",value:"KP"},{label:"Korea, Republic of",value:"KR"},{label:"Kosovo",value:"XK"},{label:"Kuwait",value:"KW"},{label:"Kyrgyzstan",value:"KG"},{label:"Lao People's Democratic Republic",value:"LA"},{label:"Latvia",value:"LV"},{label:"Lebanon",value:"LB"},{label:"Lesotho",value:"LS"},{label:"Liberia",value:"LR"},{label:"Libyan Arab Jamahiriya",value:"LY"},{label:"Liechtenstein",value:"LI"},{label:"Lithuania",value:"LT"},{label:"Luxembourg",value:"LU"},{label:"Macao",value:"MO"},{label:"Macedonia, The Former Yugoslav Republic of",value:"MK"},{label:"Madagascar",value:"MG"},{label:"Malawi",value:"MW"},{label:"Malaysia",value:"MY"},{label:"Maldives",value:"MV"},{label:"Mali",value:"ML"},{label:"Malta",value:"MT"},{label:"Marshall Islands",value:"MH"},{label:"Martinique",value:"MQ"},{label:"Mauritania",value:"MR"},{label:"Mauritius",value:"MU"},{label:"Mayotte",value:"YT"},{label:"Mexico",value:"MX"},{label:"Micronesia, Federated States of",value:"FM"},{label:"Moldova, Republic of",value:"MD"},{label:"Monaco",value:"MC"},{label:"Mongolia",value:"MN"},{label:"Montenegro",value:"ME"},{label:"Montserrat",value:"MS"},{label:"Morocco",value:"MA"},{label:"Mozambique",value:"MZ"},{label:"Myanmar",value:"MM"},{label:"Namibia",value:"NA"},{label:"Nauru",value:"NR"},{label:"Nepal",value:"NP"},{label:"Netherlands",value:"NL"},{label:"Netherlands Antilles",value:"AN"},{label:"New Caledonia",value:"NC"},{label:"New Zealand",value:"NZ"},{label:"Nicaragua",value:"NI"},{label:"Niger",value:"NE"},{label:"Nigeria",value:"NG"},{label:"Niue",value:"NU"},{label:"Norfolk Island",value:"NF"},{label:"Northern Mariana Islands",value:"MP"},{label:"Norway",value:"NO"},{label:"Oman",value:"OM"},{label:"Pakistan",value:"PK"},{label:"Palau",value:"PW"},{label:"Palestinian Territory, Occupied",value:"PS"},{label:"Panama",value:"PA"},{label:"Papua New Guinea",value:"PG"},{label:"Paraguay",value:"PY"},{label:"Peru",value:"PE"},{label:"Philippines",value:"PH"},{label:"Pitcairn",value:"PN"},{label:"Poland",value:"PL"},{label:"Portugal",value:"PT"},{label:"Puerto Rico",value:"PR"},{label:"Qatar",value:"QA"},{label:"Reunion",value:"RE"},{label:"Romania",value:"RO"},{label:"Russian Federation",value:"RU"},{label:"Rwanda",value:"RW"},{label:"Saint Helena",value:"SH"},{label:"Saint Kitts and Nevis",value:"KN"},{label:"Saint Lucia",value:"LC"},{label:"Saint Pierre and Miquelon",value:"PM"},{label:"Saint Vincent and the Grenadines",value:"VC"},{label:"Samoa",value:"WS"},{label:"San Marino",value:"SM"},{label:"Sao Tome and Principe",value:"ST"},{label:"Saudi Arabia",value:"SA"},{label:"Senegal",value:"SN"},{label:"Serbia",value:"RS"},{label:"Seychelles",value:"SC"},{label:"Sierra Leone",value:"SL"},{label:"Singapore",value:"SG"},{label:"Slovakia",value:"SK"},{label:"Slovenia",value:"SI"},{label:"Solomon Islands",value:"SB"},{label:"Somalia",value:"SO"},{label:"South Africa",value:"ZA"},{label:"South Georgia and the South Sandwich Islands",value:"GS"},{label:"Spain",value:"ES"},{label:"Sri Lanka",value:"LK"},{label:"Sudan",value:"SD"},{label:"Suriname",value:"SR"},{label:"Svalbard and Jan Mayen",value:"SJ"},{label:"Swaziland",value:"SZ"},{label:"Sweden",value:"SE"},{label:"Switzerland",value:"CH"},{label:"Syrian Arab Republic",value:"SY"},{label:"Taiwan",value:"TW"},{label:"Tajikistan",value:"TJ"},{label:"Tanzania, United Republic of",value:"TZ"},{label:"Thailand",value:"TH"},{label:"Timor-Leste",value:"TL"},{label:"Togo",value:"TG"},{label:"Tokelau",value:"TK"},{label:"Tonga",value:"TO"},{label:"Trinidad and Tobago",value:"TT"},{label:"Tunisia",value:"TN"},{label:"Turkey",value:"TR"},{label:"Turkmenistan",value:"TM"},{label:"Turks and Caicos Islands",value:"TC"},{label:"Tuvalu",value:"TV"},{label:"Uganda",value:"UG"},{label:"Ukraine",value:"UA"},{label:"United Arab Emirates",value:"AE"},{label:"United Kingdom",value:"GB"},{label:"United States",value:"US"},{label:"United States Minor Outlying Islands",value:"UM"},{label:"Uruguay",value:"UY"},{label:"Uzbekistan",value:"UZ"},{label:"Vanuatu",value:"VU"},{label:"Venezuela",value:"VE"},{label:"Viet Nam",value:"VN"},{label:"Virgin Islands, British",value:"VG"},{label:"Virgin Islands, U.S.",value:"VI"},{label:"Wallis and Futuna",value:"WF"},{label:"Western Sahara",value:"EH"},{label:"Yemen",value:"YE"},{label:"Zambia",value:"ZM"},{label:"Zimbabwe",value:"ZW"}];var U=n(4107),I=n(508),S=n(6856);function B(t,i){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const a=i.$implicit;e.s9C("value",a.value),e.xp6(1),e.Oqu(a.label)}}const F=function(){return{fontSize:"x-small"}};function L(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please accept terms & conditions to register "),e.qZA()),2&t&&e.Akn(e.DdM(2,F))}function q(t,i){1&t&&(e.TgZ(0,"div",30),e._UZ(1,"mat-spinner",31),e.qZA())}let G=(()=>{class t{constructor(a,r,o,s){this.loadingService=a,this.accountService=r,this.router=o,this.snackBar=s,this.isLoading$=this.loadingService.isLoading$,this.appRoute=v.H,this.countries=P}onRegisterSubmit(a){if(console.log(a),a.invalid)return;let r=Object.assign({},a.value);this.accountService.onRegister(r).subscribe({next:()=>{this.router.navigate([v.H.profileRel])},error:o=>this.snackBar.showSnackBar(o.error)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(p.u),e.Y36(g.B),e.Y36(b.F0),e.Y36(f.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:77,vars:8,consts:[[1,"mat-elevation-z6"],["inset","",1,"my-3"],[3,"ngSubmit"],["ngFormObj","ngForm"],[1,"row"],[1,"col-md-6"],["appearance","outline",1,"w-100"],["email","","matInput","","name","email","ngModel","","pattern","(?:^|\\s)[\\w!#$%&'*+/=?^`{|}~-](\\.?[\\w!#$%&'*+/=?^`{|}~-]+)*@\\w+[.-]?\\w*\\.[a-zA-Z]{2,3}\\b","placeholder","user@example.com","required","","type","email"],["aria-label","Select Country","name","country","ngModel","","required",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-12","col-md-6"],["matInput","","name","password","ngModel","","placeholder","Use 8 or more characters with a mix of letters, numbers & symbols","pattern","^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$","required","","type","password"],["matInput","","name","repeatPassword","ngModel","","placeholder","Use 8 or more characters with a mix of letters, numbers & symbols","pattern","^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$","required","","type","password"],[1,"col-md-4"],["matInput","","name","givenName","ngModel","","placeholder","e.g. John","required","","type","text"],["matInput","","name","surname","ngModel","","placeholder","e.g. Smith","required","","type","text"],["matInput","","name","dob","readonly","true","aria-readonly","true","ngModel","","placeholder","dd/mm/yyyy","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["dobPicker",""],[1,"row","mb-4"],[1,"col-12"],["color","primary","name","termsCheck","ngModel","","required","true","pattern","true|false"],["termsCheck",""],[1,"text-decoration-none","primaryLink",3,"routerLink"],[3,"style",4,"ngIf"],[1,"row","mb-3"],[1,"col-8","col-md-4","mx-auto"],["color","primary","mat-flat-button","","type","submit",1,"w-100"],["class","spinnerOverlay",4,"ngIf"],[3,"value"],[1,"spinnerOverlay"],["color","accent","diameter","50"]],template:function(a,r){if(1&a){const o=e.EpF();e.TgZ(0,"mat-card",0)(1,"mat-card-title"),e._uU(2,"Register"),e.qZA(),e._UZ(3,"mat-divider",1),e.TgZ(4,"mat-card-content")(5,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(o);const c=e.MAs(6);return r.onRegisterSubmit(c)}),e.TgZ(7,"div",4)(8,"div",5)(9,"mat-form-field",6)(10,"mat-label"),e._uU(11,"Email address"),e.qZA(),e._UZ(12,"input",7),e.TgZ(13,"mat-error"),e._uU(14,"Invalid email"),e.qZA()()(),e.TgZ(15,"div",5)(16,"mat-form-field",6)(17,"mat-label"),e._uU(18,"Country"),e.qZA(),e.TgZ(19,"mat-select",8),e.YNc(20,B,2,2,"mat-option",9),e.qZA(),e.TgZ(21,"mat-error"),e._uU(22,"Invalid country"),e.qZA()()()(),e.TgZ(23,"div",4)(24,"div",10)(25,"mat-form-field",6)(26,"mat-label"),e._uU(27,"Password"),e.qZA(),e._UZ(28,"input",11),e.TgZ(29,"mat-error"),e._uU(30,"Invalid password"),e.qZA()()(),e.TgZ(31,"div",10)(32,"mat-form-field",6)(33,"mat-label"),e._uU(34,"Repeat Password"),e.qZA(),e._UZ(35,"input",12),e.TgZ(36,"mat-error"),e._uU(37,"Must match password"),e.qZA()()()(),e.TgZ(38,"div",4)(39,"div",13)(40,"mat-form-field",6)(41,"mat-label"),e._uU(42,"Given Name"),e.qZA(),e._UZ(43,"input",14),e.TgZ(44,"mat-error"),e._uU(45,"Invalid given name"),e.qZA()()(),e.TgZ(46,"div",13)(47,"mat-form-field",6)(48,"mat-label"),e._uU(49,"Surname"),e.qZA(),e._UZ(50,"input",15),e.TgZ(51,"mat-error"),e._uU(52,"Invalid surname"),e.qZA()()(),e.TgZ(53,"div",13)(54,"mat-form-field",6)(55,"mat-label"),e._uU(56,"Date of Birth"),e.qZA(),e._UZ(57,"input",16)(58,"mat-datepicker-toggle",17)(59,"mat-datepicker",null,18),e.TgZ(61,"mat-error"),e._uU(62,"Invalid date"),e.qZA()()()(),e.TgZ(63,"div",19)(64,"div",20)(65,"mat-checkbox",21,22),e._uU(67," Agree to "),e.TgZ(68,"a",23),e._uU(69," terms and conditions"),e.qZA()(),e.YNc(70,L,2,3,"mat-error",24),e.qZA()(),e.TgZ(71,"div",25)(72,"div",26)(73,"button",27),e._uU(74,"Register"),e.qZA()()()()()(),e.YNc(75,q,2,0,"div",28),e.ALo(76,"async")}if(2&a){const o=e.MAs(6),s=e.MAs(60),c=e.MAs(66);e.xp6(20),e.Q6J("ngForOf",r.countries),e.xp6(37),e.Q6J("matDatepicker",s),e.xp6(1),e.Q6J("for",s),e.xp6(10),e.Q6J("routerLink",r.appRoute.termsAbs),e.xp6(2),e.Q6J("ngIf",o.submitted&&!c.checked),e.xp6(5),e.Q6J("ngIf",e.lcZ(76,6,r.isLoading$))}},directives:[d.a8,d.n5,h.d,d.dn,l._Y,l.JL,l.F,u.KE,u.hX,Z.Nt,l.Fj,l.on,l.JJ,l.On,l.c5,l.Q7,u.TO,U.gD,m.sg,I.ey,S.hl,S.nW,u.R9,S.Mq,w.oG,w.e_,b.yS,m.O5,T.lW,y.Ou],pipes:[m.Ov],styles:[""]}),t})(),R=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forgot"]],decls:20,vars:0,consts:[[1,"row","justify-content-center","my-3","my-md-4","my-lg-5","mx-auto"],[1,"col-md-7","col-lg-5"],[1,"shadowed-container"],[1,"py-4","px-2","px-md-4"],[1,"w-100"],[1,"mb-4"],["novalidate","",1,"mb-4","needs-validation"],[1,"form-floating","mb-2"],["id","email-input","placeholder","user@example.com","required","","type","email",1,"form-control"],["for","email-input"],["type","submit",1,"btn","btn-lg","btn-primary","w-100"],[1,"text-center"],["routerLink","/account/register",1,"generic-link"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),e._uU(6,"Forgot Password"),e.qZA(),e.TgZ(7,"p"),e._uU(8," Enter your email address and we will send you a password reset link. "),e.qZA()(),e.TgZ(9,"form",6)(10,"div",7),e._UZ(11,"input",8),e.TgZ(12,"label",9),e._uU(13,"Email address"),e.qZA()(),e.TgZ(14,"button",10),e._uU(15,"Reset Password"),e.qZA()(),e.TgZ(16,"div",11),e._uU(17,"Not a member? "),e.TgZ(18,"a",12),e._uU(19," Register"),e.qZA()()()()()())},directives:[l._Y,l.JL,l.F,b.yS],styles:[""]}),t})();var _=n(6343),k=n(8968),A=n(8834);function O(t,i){1&t&&(e.TgZ(0,"div",27),e._UZ(1,"mat-spinner",28),e.qZA())}function J(t,i){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const a=i.$implicit;e.s9C("value",a.value),e.xp6(1),e.hij("",a.label," ")}}function x(t,i){1&t&&(e.TgZ(0,"div",20)(1,"button",16),e._uU(2,"Update Password"),e.qZA()())}let E=(()=>{class t{constructor(a,r,o,s){this.loadingService=a,this.formBuilder=r,this.accountService=o,this.snackBarService=s,this.isLoading$=this.loadingService.isLoading$,this.countries=P,this.disablePasswordControls=!0,this.userPwd={currentPassword:"",newPassword:"",repeatPassword:""}}ngOnInit(){this.email=new l.NI(null,l.kI.email),this.givenName=new l.NI(null),this.surname=new l.NI(null),this.dob=new l.NI(null),this.country=new l.NI(null),this.currentPassword=new l.NI({value:null,disabled:this.disablePasswordControls}),this.newPassword=new l.NI({value:null,disabled:this.disablePasswordControls}),this.repeatPassword=new l.NI({value:null,disabled:this.disablePasswordControls}),this.profileForm=this.formBuilder.group({email:this.email,givenName:this.givenName,surname:this.surname,dob:this.dob,country:this.country}),this.passwordsForm=this.formBuilder.group({currentPassword:this.currentPassword,newPassword:this.newPassword,repeatPassword:this.repeatPassword}),this.getUserProfile()}showPasswordControls(){this.disablePasswordControls?this.passwordsForm.enable():this.resetPasswordForm(),this.disablePasswordControls=!this.disablePasswordControls}onUpdateSubmit(){if(this.profileForm.invalid)return;const a={givenName:void 0,surname:void 0,country:void 0},r=Object.keys(a);for(let o in this.profileForm.controls)if(r.includes(o)){const s=this.userProfile[o].toLowerCase(),c=this.profileForm.controls[o].value.toLowerCase();s!==c&&(a[o]=c)}void 0===a.givenName&&void 0===a.surname&&void 0===a.country||this.accountService.onUpdateInfo(a).subscribe({next:o=>this.snackBarService.showSnackBar(null===o?A.I.profileUpdateSuccess:A.I.generic),error:o=>this.snackBarService.showSnackBar(o.error),complete:()=>this.getUserProfile()})}getUserProfile(){this.accountService.showUser().subscribe({next:a=>{const r=a.dob.split("/").reverse().join("/");this.userProfile=a,this.profileForm.setValue({email:a.email,givenName:a.givenName||"",surname:a.surname||"",dob:new Date(r).toLocaleDateString(),country:a.country.toUpperCase()||""})},error:a=>this.snackBarService.showSnackBar(a.error)})}onPasswordsSubmit(){this.passwordsForm.valid&&(this.userPwd.currentPassword=this.currentPassword.value,this.userPwd.newPassword=this.newPassword.value,this.userPwd.repeatPassword=this.repeatPassword.value,this.userPwd.newPassword===this.userPwd.repeatPassword?this.accountService.onUpdatePassword(this.userPwd).subscribe({next:a=>this.snackBarService.showSnackBar(a),error:a=>this.snackBarService.showSnackBar(a.error),complete:()=>{this.resetPasswordForm(),this.disablePasswordControls=!0}}):this.snackBarService.showSnackBar(A.I.passwordMismatch))}resetPasswordForm(){this.passwordsForm.reset({currentPassword:{value:null,disabled:!0},newPassword:{value:null,disabled:!0},repeatPassword:{value:null,disabled:!0}}),this.passwordsForm.disable()}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(p.u),e.Y36(l.qu),e.Y36(g.B),e.Y36(f.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-account"]],decls:77,vars:9,consts:[["class","spinnerOverlay",4,"ngIf"],[1,"mat-elevation-z6"],["inset","",1,"my-3"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6"],["appearance","fill",1,"w-100"],["email","","formControlName","email","required","","readonly","","aria-readonly","true","matInput","","type","email"],["formControlName","country","required",""],["class","text-capitalize",3,"value",4,"ngFor","ngForOf"],[1,"col-lg-5"],["formControlName","givenName","required","","matInput","","type","text"],["formControlName","surname","required","","matInput","","type","text"],[1,"col-lg-2"],["formControlName","dob","matInput","","required","","placeholder","dd/mm/yyyy","readonly","","aria-readonly","true","type","text"],[1,"col-md-3","mx-auto"],["color","primary","mat-flat-button","","type","submit",1,"w-100"],["inset","",1,"my-4"],[3,"formGroup","ngSubmit"],[1,"row","row-cols-1","row-cols-md-2","justify-content-center","mb-4"],[1,"col-8","col-md-4"],["mat-flat-button","","type","button",1,"w-100","mb-2","mb-md-0",3,"color","click"],["class","col-8 col-md-4",4,"ngIf"],[1,"col-md-4"],["formControlName","currentPassword","matInput","","required","","type","password","autocomplete","current-password"],["formControlName","newPassword","matInput","","required","","type","password","autocomplete","new-password"],["formControlName","repeatPassword","matInput","","required","","type","password","autocomplete","new-password"],[1,"spinnerOverlay"],["color","accent","diameter","50"],[1,"text-capitalize",3,"value"]],template:function(a,r){1&a&&(e.YNc(0,O,2,0,"div",0),e.ALo(1,"async"),e.TgZ(2,"mat-card",1)(3,"mat-card-title"),e._uU(4,"Account"),e.qZA(),e._UZ(5,"mat-divider",2),e.TgZ(6,"mat-card-content")(7,"form",3),e.NdJ("ngSubmit",function(){return r.onUpdateSubmit()}),e.TgZ(8,"div",4)(9,"div",5)(10,"mat-form-field",6)(11,"mat-label"),e._uU(12,"Email"),e.qZA(),e._UZ(13,"input",7),e.TgZ(14,"mat-error"),e._uU(15,"Invalid email"),e.qZA()()(),e.TgZ(16,"div",5)(17,"mat-form-field",6)(18,"mat-label"),e._uU(19,"Country"),e.qZA(),e.TgZ(20,"mat-select",8),e.YNc(21,J,2,2,"mat-option",9),e.qZA()()()(),e.TgZ(22,"div",4)(23,"div",10)(24,"mat-form-field",6)(25,"mat-label"),e._uU(26,"Given Name"),e.qZA(),e._UZ(27,"input",11),e.TgZ(28,"mat-error"),e._uU(29,"Invalid given name"),e.qZA()()(),e.TgZ(30,"div",10)(31,"mat-form-field",6)(32,"mat-label"),e._uU(33,"Surname"),e.qZA(),e._UZ(34,"input",12),e.TgZ(35,"mat-error"),e._uU(36,"Invalid surname"),e.qZA()()(),e.TgZ(37,"div",13)(38,"mat-form-field",6)(39,"mat-label"),e._uU(40,"Date of Birth"),e.qZA(),e._UZ(41,"input",14),e.TgZ(42,"mat-error"),e._uU(43,"Invalid date"),e.qZA()()()(),e.TgZ(44,"div",4)(45,"div",15)(46,"button",16),e._uU(47,"Update"),e.qZA()()()(),e._UZ(48,"mat-divider",17),e.TgZ(49,"form",18),e.NdJ("ngSubmit",function(){return r.onPasswordsSubmit()}),e.TgZ(50,"div",19)(51,"div",20)(52,"button",21),e.NdJ("click",function(){return r.showPasswordControls()}),e._uU(53),e.qZA()(),e.YNc(54,x,3,0,"div",22),e.qZA(),e.TgZ(55,"div",4)(56,"div",23)(57,"mat-form-field",6)(58,"mat-label"),e._uU(59,"Current Password"),e.qZA(),e._UZ(60,"input",24),e.TgZ(61,"mat-error"),e._uU(62,"Invalid current password"),e.qZA()()(),e.TgZ(63,"div",23)(64,"mat-form-field",6)(65,"mat-label"),e._uU(66,"New Password"),e.qZA(),e._UZ(67,"input",25),e.TgZ(68,"mat-error"),e._uU(69,"Invalid new password"),e.qZA()()(),e.TgZ(70,"div",23)(71,"mat-form-field",6)(72,"mat-label"),e._uU(73,"Confirm Password"),e.qZA(),e._UZ(74,"input",26),e.TgZ(75,"mat-error"),e._uU(76,"Invalid repeat password"),e.qZA()()()()()()()),2&a&&(e.Q6J("ngIf",e.lcZ(1,7,r.isLoading$)),e.xp6(7),e.Q6J("formGroup",r.profileForm),e.xp6(14),e.Q6J("ngForOf",r.countries),e.xp6(28),e.Q6J("formGroup",r.passwordsForm),e.xp6(3),e.Q6J("color",r.disablePasswordControls?"primary":"warn"),e.xp6(1),e.hij(" ",r.disablePasswordControls?"Change Password":"Cancel"," "),e.xp6(1),e.Q6J("ngIf",!r.disablePasswordControls))},directives:[m.O5,y.Ou,d.a8,d.n5,h.d,d.dn,l._Y,l.JL,l.sg,u.KE,u.hX,l.Fj,Z.Nt,l.on,l.JJ,l.u,l.Q7,u.TO,U.gD,m.sg,I.ey,T.lW],pipes:[m.Ov],styles:[".datePickerIcon[_ngcontent-%COMP%]{font-size:1rem}"]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[b.Bz.forChild([{path:v.H.login,component:N},{path:v.H.register,component:G},{path:v.H.profile,component:E,canActivate:[k.P]},{path:v.H.forgot,component:R},{path:"",redirectTo:v.H.login,pathMatch:"full"}]),m.ez,l.u5,l.UX,_.s]]}),t})()}}]);