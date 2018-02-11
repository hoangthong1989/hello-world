//======================================================================================================================
// Nếu Tạo Mem thì Port 50001 đến 50019 sẽ tạo mã là từ 0 đến 6 còn từ 50021 đến 50035 sẽ tạo là từ 0 đến 7 
var home = "CODE:";
home += "SET !ERRORIGNORE YES" + "\n";
home += "SET !TIMEOUT_PAGE 0"+"\n";
home += "WAIT SECONDS=1"+"\n";
home += "TAB CLOSEALLOTHERS"+"\n";
home += "URL GOTO=about:home"+"\n";
iimPlay(home);ClearCookie();

var Ma_off = ["399","493","491","245","183","481","490"];
// var Ma_off = ["493"];
var File_Mail_info = 1; var sl_chay_off = 6; var off = 0;
while(true)
{
	if(off > sl_chay_off)
	{ // Neu Tong So Offer Da Chay Du Thi Out
		iimPlayCode("TAB CLOSEALLOTHERS");
		iimPlayCode("TAB CLOSE");
		break;
	}
	else
	{// Con Neu Chua Thi Tiến hành làm offer  
		// var File_Mem = "CODE:";
		// File_Mem += "SET !ERRORIGNORE YES"+" \n";
		// File_Mem += "SET !TIMEOUT_TAG 0"+" \n";
		// File_Mem += "SET !DATASOURCE Code_Mem.txt"+" \n";
		// File_Mem += "SET !DATASOURCE_LINE 1"+" \n";
		// File_Mem += "SET !DATASOURCE_COLUMNS 5"+" \n";
		// File_Mem += "ADD !EXTRACT {{!COL1}}"+" \n";
		// iimPlay(File_Mem);
		// var Code_Mem = iimGetLastExtract(1); 
		
		var User_member = ["","FireFox_1","FireFox_2"];ClearCookie();
		var Check_Off = Ma_off[off]; var F5_site_Rong = 0; var F5_Off_sai_dang = 0;		
		/////////////// Ham F5 Chờ Gọi ////////////////
		var REFRESH_Site = "CODE:";
		REFRESH_Site += "SET !ERRORIGNORE YES" + "\n";
		REFRESH_Site += "SET !TIMEOUT_PAGE 30"+"\n";
		REFRESH_Site += "REFRESH"+"\n";
		///////////////////////////////
		// loginCookie();
		iimDisplay("Dang Chay Off Ma La : "+Check_Off+"\nSo Off Da Lam : "+off);
		///////////////// Load Link Lam Offers /////////////
		var Load_Link_Nhanh = "CODE:";
		Load_Link_Nhanh += "SET !ERRORIGNORE YES" + "\n";
		Load_Link_Nhanh += "SET !TIMEOUT_PAGE 50"+"\n";
		Load_Link_Nhanh += "TAB CLOSEALLOTHERS"+"\n";
		Load_Link_Nhanh += "CLEAR"+"\n";
		Load_Link_Nhanh += "URL GOTO=http://leadadsoffers.com/home/quickbanner/"+User_member[File_Mail_info]+"/"+Ma_off[off]+"\n";
		// Load_Link_Nhanh += "URL GOTO=http://earnmoneyoffer.net/home/quickbanner/"+User_member[File_Mail_info]+"/"+Ma_off[off]+"\n";
		iimPlay(Load_Link_Nhanh);
		////////////// Cho Lệnh Chờ Nếu Site Bị Trắng /////////////////// 
		switch(Check_Off)
		{
			case "412":case "376":case "345":
			case "310":case "305":case "175":case "297":case "292":case "291":case "286":case "277":
			case "181":case "176":case "171":case "110":case "252":case "203":case "172":case "187":
			case "61":case "26":case "10":
			case "57":case "66":case "30":case "31":case "23":case "45":case "18":case "50":case "484":
			iimPlayCode("WAIT SECONDS=5");
			break;
			////
			case "306":case "183":case "119":case "294":case "450":case "449":case "448":
			case "138":case "128":case "127":case "102":case "118":case "114":case "115":case "213":
			case "21":case "75":case "62":case "73":case "5":case "2":
			iimPlayCode("WAIT SECONDS=10");
			break;
			////
			case "485":
			iimPlayCode("WAIT SECONDS=15");
			break;
			////
			case "186":case "137":case "300":case "211":
			iimPlayCode("WAIT SECONDS=20");
			break;
			////
			default:
			iimPlayCode("WAIT SECONDS=1");
			break;
		}
		while(true)
		{ 
			iimDisplay("Dang Chay Off Ma La : "+Check_Off+"\nSo Off Da Lam : "+off);
			var title = window.document.title;
			if(title != "")
			{ // Neu Site Co Title La Khong Rong
				if(Check_Off == "0")
				{ // 
					var Insurance_check = "CODE:";
					Insurance_check += "SET !ERRORIGNORE YES"+" \n";
					Insurance_check += "SET !TIMEOUT_TAG 0"+" \n";
					Insurance_check += "TAG POS=1 TYPE=BUTTON FORM=ID:formemail ATTR=ID:btnRcpSubmit EXTRACT = TXT"+" \n";
					iimPlay(Insurance_check);
					var extract = iimGetExtract();
					if(extract == "Search Ads Now")
					{
						var capcha = check_capcha();
						if(capcha == true)
						{
							var Insurance = "CODE:";
							Insurance += "SET !ERRORIGNORE YES"+" \n";
							Insurance += "SET !TIMEOUT_TAG 60"+" \n";
							Insurance += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved"+" \n";
							Insurance += "SET !TIMEOUT_TAG 0"+" \n";
							Insurance += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Insurance += "SET !DATASOURCE_LINE 1"+" \n";
							Insurance += "SET !DATASOURCE_COLUMNS 5"+" \n";
							Insurance += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formemail ATTR=ID:zipcode CONTENT={{!COL5}}"+" \n";
							Insurance += "TAG POS=1 TYPE=BUTTON FORM=ID:formemail ATTR=ID:btnRcpSubmit"+" \n";
							iimPlay(Insurance);
							iimPlayCode("WAIT SECONDS=20");
						}
					}
					off++;
					break;
				}
				if(title == "Hit The Snack Spot"||title == "Game Day Is Here! Are You Prepared?"||title == "What Coffee Are You?"||title == "Make 2018 Your Best Year with Great Tips and Big Savings"||title == "Have Yourself A Very Merry Holiday"||title == "Gorton's Guide to Holiday Hosting"||title == "Celebrate The Holidays With Happiness, And Snacks!"||title == "Celebrate the Flavor of the Holidays"||title == "Barilla's Passport To Wonderful At ShopRite"||title == "Dove Wants To Know: Are there any dynamic teenage girls in your life?"||title == "Celebrate The Holidays With Happiness, And Snacks!"||title == "What Meal Will Get Your Family To The Table Tonight?"||title == "Discover Your Perfect Holiday Pair"||title == "How Should You Celebrate Fall?"||title == "Getting Through The Holidays Germ Free With CVS Pharmacy"||title == "Because You Were Born To Move, Let's Move with Dr. Scholl's®"||title == "When Your Family Gathers, Things Get Messy. Ours Can Help."||title == "Enjoy The Drive"||title == "Start Strong With Mott's® On-The-Go 100% Juice Pouches"||title == "Deo Made Simple"||title == "Once Upon a Whole Grain"||title == "KNOW YOUR PROTEIN"||title == "#MYOREOCREATION #CONTEST"||title == "Despicably Delicious"||title == "Refresh & Revive Your Hair This Summer"||title == "Pick Your Pepper"||title == "They Grow Up Fast – See How You Can Savor Every Delicious Moment"||title == "Transform Your Laundry Routine into a Sensorial Experience")
				{ // 104 127 157 159 173 177 175 182 193 251 258 277 195 129 297 341 343 361 363 376 391 471
				    try
					{
						switch(Check_Off)
						{
							case "471":case "391":case "178":case "376":case "363":case "361":case "343":
							case "341":case "297":case "129":case "195":case "277":case "258":case "251":case "193":
							case "175":case "159":case "157":case "127":case "104":case "173":case "177":case "182":
							case "79":case "77":case "67":case "12":case "66":case "27":case "20":case "11":case "47":
							case "57":case "8":
							// loginCookie();
							// Dailybreak_V2(File_Mail_info);
							Dailybreak(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "RewardBee"||title == "Roblox"||title == "TopSweeps - Survey")
				{ // 17 22 71 76 25 86 109 123 84 145 78 180 179 39 239 241 174 204 245 248 340 387 386 442 486 490
					try
					{
						switch(Check_Off)
						{ // RewardBee
							case "442":case "459":
							case "387":case "241":case "180":case "179":case "123":case "109":case "145":case "239":
							case "25":case "78":case "84":case "39":case "86":case "76":case "71":case "17":case "22":
							// iimPlay(REFRESH_Site);
							iimPlayCode("WAIT SECONDS=5");
							// RewardBee_V2(File_Mail_info);
							RewardBee(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Roblox
							case "386":case "248":case "245":case "174":case "204":
							var Thang = Math.floor((Math.random() * 12) + 2);
							var Ngay = Math.floor((Math.random() * 9) + 1);
							var Nam = Math.floor((Math.random() * (1982 - 1975 + 1)) + 1975);
							var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var pass = "hugyftdedw";
							var Name = Tao_Name();
							var Roblox = "CODE:";		
							Roblox += 'EVENT TYPE=CLICK SELECTOR="#MonthDropdown" BUTTON=0'+" \n";
							Roblox += "EVENT TYPE=CLICK SELECTOR=\"#MonthDropdown>OPTION:nth-of-type("+Thang+")\" BUTTON=0"+" \n";
							Roblox += "	TAG POS=1 TYPE=SELECT ATTR=ID:DayDropdown CONTENT=%"+Ngay+" \n";
							Roblox += "	TAG POS=1 TYPE=SELECT ATTR=ID:YearDropdown CONTENT=%"+Nam+" \n";
							// Roblox += "	SET !DATASOURCE Last_First.txt"+" \n";
							// Roblox += "	SET !DATASOURCE_LINE "+Ten_Ho+" \n";
							// Roblox += "	SET !DATASOURCE_COLUMNS 2"+" \n";
							Roblox += "	TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:signup-username CONTENT="+Name+" \n";
							Roblox += "	SET !ENCRYPTION NO"+" \n";
							Roblox += "	TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:signup-password CONTENT="+pass+" \n";
							Roblox += "	TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:signup-password-confirm CONTENT="+pass+" \n";
							Roblox += "	TAG POS=1 TYPE=DIV ATTR=CLASS:cover-sprite<SP>gender<SP>female&&TXT:"+" \n";
							Roblox += "	TAG POS=1 TYPE=LABEL ATTR=ID:agreeTermsPrivacyLabel	"+" \n";
							Roblox += "	TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:agreeTermsPrivacy CONTENT=YES	"+" \n";
							Roblox += "	TAG POS=1 TYPE=BUTTON ATTR=ID:signup-button	"+" \n";
							Roblox += "	WAIT SECONDS=20"+" \n";
							iimPlay(Roblox);
							break;
						}
						switch(Check_Off)
						{// TopSweeps
							case "490":case "486":case "340":
							TopSweeps(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Vacation Rentals - Beach Houses, Condos, Cabins, Apartments & Vacation Homes | Tripping.com")
				{ // 23 45 50 18 1 83 10 26 176 181 172 171 221 203 233 240 252 286 6 281 352 183 384 439 405
					try
					{
						switch(Check_Off)
						{
							case "405":case "439":case "384":case "352":case "281":case "183":case "286":
							case "240":case "203":case "221":case "171":case "172":case "181":case "176":case "26":
							case "252":case "233":case "10":case "83":case "1":case "18":case "50":case "23":case "45":
							var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
							var a = pref.getBranch("privacy.trackingprotection.");
							a.setBoolPref("enabled",false);
							var STT = Math.floor((Math.random() * 2) + 0);
							var Country = ["Mexico","New","Zealand"];
							var Tripping = "CODE:";
							Tripping += "SET !ERRORIGNORE YES" + "\n";
							Tripping += "SET !TIMEOUT_TAG 0"+"\n";
							Tripping += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>SPAN>INPUT\" BUTTON=0"+"\n";
							Tripping += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>SPAN>INPUT" CHARS='+Country[STT]+"\n";
							Tripping += "WAIT SECONDS = 7"+"\n";
							Tripping += "EVENT TYPE=MOUSEDOWN SELECTOR=\"HTML>BODY>DIV:nth-of-type(3)>DIV>SPAN:nth-of-type(2)\" BUTTON=0"+"\n";
							Tripping += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>SPAN>DIV\" BUTTON=0"+"\n";
							// Tripping += "TAG POS=1 TYPE=TD ATTR=TXT:29"+"\n";
							// Tripping += "TAG POS=2 TYPE=TD ATTR=TXT:30"+"\n";
							Tripping += "TAG POS=2 TYPE=TD ATTR=TXT:4"+"\n";
							Tripping += "TAG POS=2 TYPE=TD ATTR=TXT:11"+"\n";
							Tripping += "WAIT SECONDS = 1"+" \n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>SPAN>DIV" BUTTON=0'+" \n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV>UL>LI:nth-of-type(3)" BUTTON=0'+" \n";
							Tripping += "WAIT SECONDS = 2"+" \n";
							Tripping += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Search"+" \n";
							Tripping += "WAIT SECONDS = 5"+" \n";
							Tripping += "TAG POS=1 TYPE=IMG ATTR=SRC:https://s0.trippng.com/attachments/*/store/fill/400/275/*/media.jpeg"+" \n";
							Tripping += "TAG POS=1 TYPE=IMG ATTR=SRC:https://s0.trippng.com/attachments/*/store/fill/400/275/*/media.jpeg"+" \n";
							Tripping += "TAG POS=1 TYPE=IMG ATTR=SRC:https://s0.trippng.com/attachments/*/store/fill/400/275/*/media.jpeg"+" \n";
							Tripping += "TAB T = 2"+" \n";
							Tripping += "WAIT SECONDS = 10"+" \n";
							iimPlay(Tripping);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Dream Builders Contest"||title == "(re)starting YOUR CAREER AFTER 45"||title == "Small Gestures. BIG Impact. By AARP"||title == "THE AARP DAILY DISCOVERY GIVEAWAY"||title == "Retirement in Reach $50,000 Sweepstakes")
				{ // 49 46 116 291
					try
					{
						switch(Check_Off)
						{
							case "291":case "116":case "46":case "49":
							AARP(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Life Insurance"||title == "Mortgage"||title == "Insurance Branch"||title == "Mortgage Insurance"||title == "Health Insurance"||title == "Medicare Insurance"||title == "Home Insurance")
				{ // 115 114 367 366
					try  
					{
						switch(Check_Off)
						{ // Zip dang Insurance
							case "366":case "367":case "114":case "115":
							var Insurance = "CODE:";
							Insurance += "SET !ERRORIGNORE YES"+" \n";
							Insurance += "SET !TIMEOUT_TAG 0"+" \n";
							Insurance += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Insurance += "SET !DATASOURCE_LINE 1"+" \n";
							Insurance += "SET !DATASOURCE_COLUMNS 5"+" \n";
							Insurance += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:* ATTR=ID:zip-code CONTENT={{!COL5}}"+" \n";
							Insurance += "TAG POS=1 TYPE=BUTTON FORM=ID:* ATTR=ID:submit"+" \n";
							Insurance += "TAG POS=1 TYPE=BUTTON FORM=ID:zip-form ATTR=ID:button"+" \n";
							Insurance += "TAG POS=1 TYPE=BUTTON FORM=ID:zip-form ATTR=ID:submit-btn"+" \n";
							Insurance += "WAIT SECONDS=10"+" \n";
							Insurance += "EVENT TYPE=CLICK SELECTOR=\"#listingTable0>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>IMG\" BUTTON=0"+" \n";
							Insurance += "TAG POS=1 TYPE=IMG ATTR=SRC:http://d29u10q7qlh006.cloudfront.net/i/i/68/E-ohvumwE-AokkD1dz6gwU26OhA.png"+" \n";
							Insurance += "TAG POS=1 TYPE=IMG ATTR=SRC:http://qmpcdn.nextinsure.com/content/one/8386/QS_logo.png"+" \n";
							Insurance += "TAG POS=1 TYPE=IMG ATTR=SRC:http://d29u10q7qlh006.cloudfront.net/i/i/800/7ob9aIKDCKzVWF89q-e_0xKsm8k.png"+" \n";
							Insurance += "TAG POS=1 TYPE=IMG ATTR=SRC:http://d29u10q7qlh006.cloudfront.net/i/i/215/3MrxqG6RBj3-7u8bb5YFC1UzBac.png"+" \n";
							Insurance += "TAG POS=1 TYPE=IMG ATTR=SRC:http://qmpcdn.nextinsure.com/content/one/936/health.jpg"+" \n";
							Insurance += "WAIT SECONDS=15"+" \n";
							iimPlay(Insurance);
							break;
						}
						switch(Check_Off)
						{ // zip dang Khac
							case "0":
							var Insurance1 = "CODE:";
							Insurance1 += "SET !ERRORIGNORE YES"+" \n";
							Insurance1 += "SET !TIMEOUT_TAG 0"+" \n";
							Insurance1 += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Insurance1 += "SET !DATASOURCE_LINE 1"+" \n";
							Insurance1 += "SET !DATASOURCE_COLUMNS 5"+" \n";
							Insurance1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:questionaire ATTR=ID:zip-code CONTENT={{!COL5}}"+"\n";
							Insurance1 += "TAG POS=1 TYPE=BUTTON FORM=ID:questionaire ATTR=ID:submit"+"\n";
							Insurance1 += "TAG POS=1 TYPE=BUTTON FORM=ID:questionaire ATTR=TXT:Refinancing"+"\n";
							Insurance1 += "TAG POS=2 TYPE=SPAN ATTR=TXT:Refinancing"+"\n";
							Insurance1 += "TAG POS=2 TYPE=BUTTON FORM=ID:questionaire ATTR=ID:submit"+"\n";
							Insurance1 += "TAG POS=1 TYPE=BUTTON FORM=ID:questionaire ATTR=TXT:Select"+"\n";
							Insurance1 += "TAG POS=1 TYPE=A ATTR=TXT:720<SP>-<SP>739"+"\n";
							Insurance1 += "TAG POS=3 TYPE=BUTTON FORM=ID:questionaire ATTR=ID:submit"+"\n";
							Insurance1 += "WAIT SECONDS=15"+" \n";
							iimPlay(Insurance1);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Free Offer for Outdoor Life Digital"||title == "Free Offer for Popular Science digital"||title == "Free Offer for Yachting Digital"||title == "Free Offer for Cruising World Digital"||title == "Free Offer for Boating Digital"||title == "Free Offer for Cycle World Digital"||title == "Free Offer for Flying Digital"||title == "Free Offer for Pain-Free Living Digital") 
				{ //
					try
					{
						switch(Check_Off)
						{
							case "0":
							Free_Offer_for_capcha(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Rent2OwnHelper.com"||title == "Free Fantasy Football - NFL.com"||title == "Share Your Freebies"||title == "Next Millennium")
				{ // 134 137 186 209 484
					try
					{
						switch(Check_Off)
						{ // NFL
							case "1":
							NFL(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Share Your Freebies
							case "186":case "137":case "134":
							Share_Your_Freebies(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Next Millennium
							case "209":
							var Random_Phon0 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
							var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
							var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);
							var NextMillennium = "CODE:";
							NextMillennium += "SET !ERRORIGNORE YES"+"\n";
							NextMillennium += "SET !TIMEOUT_TAG 0"+"\n";
							NextMillennium += "SET !DATASOURCE Last_First.txt"+"\n";
							NextMillennium += "SET !DATASOURCE_LINE 5"+"\n";
							NextMillennium += "SET !DATASOURCE_COLUMNS 2"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:PageForm ATTR=ID:FIRST_NAME CONTENT={{!COL1}}"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:PageForm ATTR=ID:LAST_NAME CONTENT={{!COL2}}"+"\n";
							NextMillennium += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							NextMillennium += "SET !DATASOURCE_LINE 1"+"\n";
							NextMillennium += "SET !DATASOURCE_COLUMNS 5"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:PageForm ATTR=ID:ADDRESS1 CONTENT={{!COL2}}"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:ZIP CONTENT={{!COL5}}"+"\n";
							NextMillennium += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							NextMillennium += "SET !DATASOURCE_LINE 1"+"\n";
							NextMillennium += "SET !DATASOURCE_COLUMNS 1"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:PageForm ATTR=ID:form1_leadem CONTENT={{!COL1}}"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:HOME_PHONE_AREA CONTENT="+Random_Phon0+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:HOME_PHONE_PREFIX CONTENT="+Random_Phon1+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:HOME_PHONE_SUFFIX CONTENT="+Random_Phon2+"\n";
							NextMillennium += "TAG POS=1 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:Do<SP>you<SP>have<SP>an<SP>active<SP>checking<SP>account?*"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:PageForm ATTR=ID:rbtnHasCheckingAccountYes"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:PageForm ATTR=ID:rbtnConsultationNo"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:PageForm ATTR=ID:rbtnCheckingNSYes"+"\n";
							NextMillennium += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:PageForm ATTR=ID:TERMS CONTENT=YES"+"\n";
							NextMillennium += "TAG POS=1 TYPE=BUTTON FORM=ID:PageForm ATTR=ID:SUBMIT"+"\n";
							NextMillennium += "WAIT SECONDS=3"+"\n";
							NextMillennium += "TAG POS=1 TYPE=A ATTR=ID:SKIP1"+"\n";
							NextMillennium += "WAIT SECONDS=1"+"\n";
							NextMillennium += "TAG POS=1 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:Yes"+"\n";
							NextMillennium += "TAG POS=2 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:No"+"\n";
							NextMillennium += "TAG POS=3 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:Yes"+"\n";
							NextMillennium += "TAG POS=4 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:No"+"\n";
							NextMillennium += "TAG POS=5 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:Yes"+"\n";
							NextMillennium += "WAIT SECONDS=20"+"\n";
							iimPlay(NextMillennium);
							break;
						}
						switch(Check_Off)
						{ // Rent2OwnHelper
							case "484":
							var Error_capcha = 0;
							var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Random_Phon0 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
							var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
							var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);
							var Rent2OwnHelper_Zip = "CODE:";
							Rent2OwnHelper_Zip += "SET !ERRORIGNORE YES"+"\n";
							Rent2OwnHelper_Zip += "SET !TIMEOUT_TAG 0"+"\n";
							Rent2OwnHelper_Zip += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							Rent2OwnHelper_Zip += "SET !DATASOURCE_LINE 1"+"\n";
							Rent2OwnHelper_Zip += "SET !DATASOURCE_COLUMNS 5 "+"\n";
							Rent2OwnHelper_Zip += 'EVENT TYPE=CLICK SELECTOR="#location" BUTTON=0'+"\n";
							Rent2OwnHelper_Zip += 'EVENTS TYPE=KEYPRESS SELECTOR="#location" CHARS="{{!COL5}}"'+"\n";
							Rent2OwnHelper_Zip += "TAG POS=1 TYPE=BUTTON ATTR=ID:btnSearch"+"\n";
							Rent2OwnHelper_Zip += "WAIT SECONDS = 5"+"\n";
							iimPlay(Rent2OwnHelper_Zip);
							while(true)
							{
								var capcha = check_capcha();
								if(capcha == true)
								{
									var Rent2OwnHelper = "CODE:";
									Rent2OwnHelper += "SET !ERRORIGNORE YES"+"\n";
									Rent2OwnHelper += "SET !TIMEOUT_TAG 60"+"\n";
									Rent2OwnHelper += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved"+"\n";
									Rent2OwnHelper += "SET !TIMEOUT_TAG 0"+"\n";
									Rent2OwnHelper += "SET !DATASOURCE Last_First.txt"+"\n";
									Rent2OwnHelper += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
									Rent2OwnHelper += "SET !DATASOURCE_COLUMNS 2  "+"\n";
									Rent2OwnHelper += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form1 ATTR=ID:first CONTENT={{!COL1}}"+"\n";
									Rent2OwnHelper += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form1 ATTR=ID:last CONTENT={{!COL2}}"+"\n";
									Rent2OwnHelper += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:form1 ATTR=ID:phone CONTENT=("+Random_Phon0+")<SP>"+Random_Phon1+"-"+Random_Phon2+"\n";
									Rent2OwnHelper += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
									Rent2OwnHelper += "SET !DATASOURCE_LINE 1"+"\n";
									Rent2OwnHelper += "SET !DATASOURCE_COLUMNS 1"+"\n";
									Rent2OwnHelper += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:form1 ATTR=ID:email CONTENT={{!COL1}}"+"\n";
									Rent2OwnHelper += "TAG POS=1 TYPE=BUTTON FORM=ID:form1 ATTR=TXT:View<SP>Listings"+"\n";
									Rent2OwnHelper += "WAIT SECONDS=5"+"\n";
									Rent2OwnHelper += "TAG POS=1 TYPE=BUTTON ATTR=TXT:NO"+"\n";
									Rent2OwnHelper += "WAIT SECONDS=1"+"\n";
									Rent2OwnHelper += "TAG POS=1 TYPE=BUTTON ATTR=ID:btnCredit"+"\n";
									Rent2OwnHelper += "WAIT SECONDS=15"+"\n";
									iimPlay(Rent2OwnHelper);
									break;
								}
								else
								{
									Error_capcha++;
									iimPlay(REFRESH_Site);
									iimDisplay("Error Recaptcha");
									if(Error_capcha > 2)
									{
										break;
									}
								}
							}
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Witch Trivia Quiz."||title == "Marvel Super Hero Quiz."||title == "IQ Quiz."||title == "10 Things That You Didn’t Know About Christmas."||title == "The Top Ten Best Gifts for Men Under $30 « ExtraExtraPost"||title == "The Top 10 Best Deals on Back to School Supplies"||title == "Game Of Thrones Slideshow, The Top 10 Deaths - Extraextrapost")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "0":
								var Sl_F5 = 0;
								var Off_2263_link1 = "http://quizfactory.com/simple/witches/2.php";
								switch(Check_Off)
								{
									case "0":
										var Witches_Trivia_Quiz = "CODE:";
										Witches_Trivia_Quiz += "SET !ERRORIGNORE YES" + "\n";
										Witches_Trivia_Quiz += "SET !TIMEOUT_PAGE 20"+"\n";
										Witches_Trivia_Quiz += "TAG POS=1 TYPE=A ATTR=TXT:Start<SP>The<SP>Quiz"+" \n";
										Witches_Trivia_Quiz += "TAG POS=1 TYPE=A ATTR=TXT:Start<SP>The<SP>Quiz"+" \n";
										Witches_Trivia_Quiz += "WAIT SECONDS=5"+" \n";
										Witches_Trivia_Quiz += "REFRESH"+" \n";
										Witches_Trivia_Quiz += "URL GOTO="+Off_2263_link1+"\n";
										Witches_Trivia_Quiz += "TAG POS=1 TYPE=A ATTR=TXT:Continue<SP>>>"+" \n";
										iimPlay(Witches_Trivia_Quiz);
									break;
									case "0":
										var IQ_Quiz = "CODE:";
										IQ_Quiz += "SET !ERRORIGNORE YES"+" \n";
										IQ_Quiz += "SET !TIMEOUT_PAGE 30"+" \n";
										IQ_Quiz += "TAG POS=1 TYPE=FONT ATTR=TXT:START"+" \n";
										IQ_Quiz += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:1.php ATTR=*"+" \n";
										IQ_Quiz += "WAIT SECONDS=10"+" \n";
										IQ_Quiz += "URL GOTO="+off_1280+"\n";
										iimPlay(IQ_Quiz);
									break;
									case "0":
										var SuperHeroQuiz = "CODE:";
										SuperHeroQuiz += "SET !ERRORIGNORE YES"+" \n";
										SuperHeroQuiz += "SET !TIMEOUT_PAGE 30"+" \n";
										SuperHeroQuiz += "TAG POS=1 TYPE=A ATTR=TXT:Start<SP>The<SP>Quiz"+" \n";
										SuperHeroQuiz += "TAG POS=1 TYPE=A ATTR=TXT:Start<SP>The<SP>Quiz"+" \n";
										SuperHeroQuiz += "WAIT SECONDS=10"+" \n";
										SuperHeroQuiz += "URL GOTO="+off_1960+"\n";
										iimPlay(SuperHeroQuiz);
									break;
								}
								while(true)
								{
									var F5 = "CODE:";
									F5 += "SET !ERRORIGNORE YES" + "\n";
									F5 += "SET !TIMEOUT_PAGE 5"+"\n";
									F5 += "REFRESH"+"\n";
									iimPlay(F5);
									if(Sl_F5 > 15)
									{
										break;
									}
									Sl_F5++;
									iimPlayCode("WAIT SECONDS=0.5");
									iimDisplay("Số lần F5 là: "+Sl_F5);
								}

							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "National Consumer Center"||title == "Nationaldigitalsurvey.com"||title == "sweepstakesamonth"||title == "Are you lucky?"||title == "Amazon Fresh 500"||title == "Step 1 - Register"||title == "$1000 Visa Giftcard"||title == "(1) Prize Alert!!!"||title == "SurveysandPromotions")
				// 110 146 154 162 163 169 96 199 313 316 319 320 400 404 429 428 427 426 433 434 437 455 491 493
				{
					try
					{
						switch(Check_Off)
						{ // National_Consumer_Center
							case "455":case "437":
							case "434":case "433":case "426":case "427":case "428":case "429":case "400":case "320":
							case "316":case "313":case "96":case "169":case "163":case "162":case "146":case "110":
							National_Consumer_Center(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Nationaldigitalsurvey dạng mới
							case "493":
							Nationaldigitalsurvey(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Step_1
							case "491":case "404":case "319":
							Step_1(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // check title tab 2 
							case "154":
							var National_Quay = "CODE:";
							National_Quay += "SET !ERRORIGNORE YES"+"\n";
							National_Quay += "SET !TIMEOUT_TAG 0"+"\n";
							National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q1>DIV\" BUTTON=0"+"\n";
							National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q2>DIV\" BUTTON=0"+"\n";
							National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q3>DIV\" BUTTON=0"+"\n";
							National_Quay += "WAIT SECONDS=10"+"\n";
							National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#content3>A>DIV\" BUTTON=0"+"\n";
							National_Quay += "TAB T=2"+"\n";
							National_Quay += "WAIT SECONDS=1"+"\n";
							iimPlay(National_Quay);
							iimPlayCode("WAIT SECONDS=1");
							var title = window.document.title;
							if(title == "National Consumer Center")
							{
								National_Consumer_Center(File_Mail_info);
							}
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Congratulations!"||title == "McDonalds-100$"||title == "SurveysandPromotions"||title == "Free Fall Samples"||title == "Pillsbury - Wellness by Samples and Rebates")
				{ // 261 314
					try
					{
						switch(Check_Off)
						{
							case "314":case "261":
							switch(Check_Off)
							{// bước quay thưởng
								case "261":
								var National_Quay = "CODE:";
								National_Quay += "SET !ERRORIGNORE YES"+"\n";
								National_Quay += "SET !TIMEOUT_TAG 0"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#lb-confirm\" BUTTON=0"+"\n";
								National_Quay += "WAIT SECONDS=1"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#cp_main>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)\" BUTTON=0"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal01>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
								National_Quay += "WAIT SECONDS=3"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q1>SPAN\" BUTTON=0"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q2>SPAN\" BUTTON=0"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q3>SPAN\" BUTTON=0"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q4>SPAN\" BUTTON=0"+"\n";
								National_Quay += "WAIT SECONDS=10"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#v4>TABLE>TBODY>TR:nth-of-type(2)>TD:nth-of-type(2)>A:nth-of-type(2)>DIV\" BUTTON=0"+"\n";
								iimPlay(National_Quay);
								break;
								case "314":
								var National_Quay = "CODE:";
								National_Quay += "SET !ERRORIGNORE YES"+"\n";
								National_Quay += "SET !TIMEOUT_TAG 10"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#lb-confirm\" BUTTON=0"+"\n";
								National_Quay += "WAIT SECONDS=1"+"\n";
								National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#cp_main>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)\" BUTTON=0"+"\n";
								iimPlay(National_Quay);
								break;
							}
							switch(Check_Off)
							{// Check Title Tab 2
								case "314":case "261":
								iimPlayCode("TAB T=2");
								iimPlayCode("WAIT SECONDS=1");
								var title = window.document.title;
								if(title == "SurveysandPromotions")
								{
									National_FRAME_1(File_Mail_info);
								}
								else if(title == "National Consumer Center")
								{
									National_Consumer_Center(File_Mail_info);
								}
								break;
							}
							break;
						}
						switch(Check_Off)
						{ // Free Fall Samples
							case "0":
							Free_Fall_Samples(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Pillsbury
							case "0":
							var pass = Tao_Pass();
							var Random_Ngay = Math.floor((Math.random() * 9) + 1);
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
							var Pillsbury = "CODE:";
							Pillsbury += "SET !ERRORIGNORE YES"+"\n";
							Pillsbury += "SET !TIMEOUT_TAG 0"+"\n";
							Pillsbury += "TAG POS=1 TYPE=IMG ATTR=SRC:http://wellness.samplesandrebates.com/Images/offers/Pills300x250Fall.jpg"+"\n";
							Pillsbury += "WAIT SECONDS=5"+"\n";
							Pillsbury += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Pillsbury += "SET !DATASOURCE_LINE 1"+"\n";
							Pillsbury += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:gmi_ma_nwCTA_63c68d3b74194b3f9777e64b8ffec408_email_inputText CONTENT={{!COL1}} "+"\n";
							Pillsbury += "TAG POS=1 TYPE=BUTTON ATTR=ID:gmi_ma_nwCTA_63c68d3b74194b3f9777e64b8ffec408_anonymousSignUpButton_link"+"\n";
							Pillsbury += "WAIT SECONDS=5"+"\n";
							Pillsbury += "TAG POS=1 TYPE=SPAN ATTR=ID:gmi_ma_nwCTA_63c68d3b74194b3f9777e64b8ffec408_join_span"+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:728294da-12e5-4842-92d9-b3b7eb66352c CONTENT={{!COL1}} "+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:728294da-12e5-4842-92d9-b3b7eb66352c CONTENT={{!COL1}} "+"\n";
							Pillsbury += "SET !ENCRYPTION NO"+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:3f02932a-45ac-4c02-a505-12a7e314fdfa CONTENT=&%"+pass+"\n";
							Pillsbury += "TAG POS=1 TYPE=BUTTON ATTR=ID:49d96233-7514-4852-aa93-72148e412f04"+"\n";
							Pillsbury += "WAIT SECONDS=3"+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:f5f1f8c5-6d81-486e-bf5c-fdc613427650 CONTENT=YES"+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:6ffa355e-daa7-4cca-a9ca-4f1f708afd34 CONTENT=YES"+"\n";
							Pillsbury += "TAG POS=2 TYPE=BUTTON ATTR=ID:49d96233-7514-4852-aa93-72148e412f04"+"\n";
							Pillsbury += "WAIT SECONDS=3"+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:montha4183433-636f-4dc5-a166-6b1a21008260 CONTENT=0"+Random_Ngay+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:daya4183433-636f-4dc5-a166-6b1a21008260 CONTENT=0"+Random_Thang+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:yeara4183433-636f-4dc5-a166-6b1a21008260 CONTENT="+Random_Nam+"\n";
							Pillsbury += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							Pillsbury += "SET !DATASOURCE_LINE 1"+"\n";
							Pillsbury += "SET !DATASOURCE_COLUMNS 5"+"\n";
							Pillsbury += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:ae38cbfb-597a-4b4a-8f44-c7b9650db748 CONTENT={{!COL5}} "+"\n";
							Pillsbury += "TAG POS=1 TYPE=BUTTON ATTR=ID:51c36343-ab4e-4cd1-8dd9-b760a3db6920"+"\n";
							Pillsbury += "WAIT SECONDS=20"+"\n";
							iimPlay(Pillsbury);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "3015-General"||title == "Join RewardTV - TV Trivia - Cash & Prizes - RewardTV UK"||title == "Your Comprehensive Resource for the Everyday Home Renter | Assisting Renters")
				{ // 
					try
					{
						switch(Check_Off)
						{ // RewardTV
							case "0":
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
							var Pass = Tao_Pass();
							var Reward_TV = "CODE:";
							Reward_TV += "SET !ERRORIGNORE YES"+" \n";
							Reward_TV += "SET !TIMEOUT_TAG 0"+" \n";
							Reward_TV += "TAG POS=1 TYPE=LABEL FORM=ID:sg_FormFor1208020 ATTR=TXT:Male"+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:sg_FormFor1208020 ATTR=ID:sg_NextButton"+" \n";
							Reward_TV += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
							Reward_TV += "SET !DATASOURCE_LINE 1"+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:join ATTR=ID:emailAddress CONTENT={{!COL1}}"+" \n";
							Reward_TV += "SET !ENCRYPTION NO"+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:join ATTR=ID:password CONTENT="+Pass+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:join ATTR=ID:confirmPassword CONTENT="+Pass+" \n";
							Reward_TV += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Reward_TV += "SET !DATASOURCE_LINE 1"+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:join ATTR=ID:zipcode CONTENT={{!COL1}}"+" \n";
							Reward_TV += "TAG POS=1 TYPE=SELECT FORM=ID:join ATTR=ID:monthOfBirth CONTENT=%"+Random_Thang+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:join ATTR=ID:yearOfBirth CONTENT="+Random_Nam+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:join ATTR=ID:gender1"+" \n";
							Reward_TV += "TAG POS=1 TYPE=SELECT FORM=ID:join ATTR=ID:incomeList CONTENT=%149057"+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:join ATTR=ID:weeklyNewsLetterValue1 CONTENT=YES"+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:join ATTR=ID:specialOffersValue1 CONTENT=YES"+" \n";
							Reward_TV += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ID:join ATTR=NAME:submit&&SRC:http://uk.rewardtv.com/images/dot.gif"+" \n";
							Reward_TV += "WAIT SECONDS=25"+" \n";
							iimPlay(Reward_TV);
							break;
						}
						switch(Check_Off)
						{ // Assisting
							case "0":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Your = "CODE:";
							Your += "SET !ERRORIGNORE YES"+" \n";
							Your += "SET !TIMEOUT_TAG 0"+" \n";
							Your += "SET !DATASOURCE Last_First.txt"+" \n";
							Your += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
							Your += "SET !DATASOURCE_COLUMNS 2"+" \n";
							Your += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-* ATTR=ID:edit-submitted-first-name CONTENT={{!COL1}}"+" \n";
							Your += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-* ATTR=ID:edit-submitted-last-name CONTENT={{!COL2}}"+" \n";
							Your += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Your += "SET !DATASOURCE_LINE 1"+" \n";
							Your += "SET !DATASOURCE_COLUMNS 5"+" \n";
							Your += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-* ATTR=ID:edit-submitted-phone-number CONTENT={{!COL1}} "+" \n";
							Your += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
							Your += "SET !DATASOURCE_LINE 1"+" \n";
							Your += "SET !DATASOURCE_COLUMNS 1"+" \n";
							Your += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:webform-client-form-* ATTR=ID:edit-submitted-email-address CONTENT={{!COL1}}"+" \n";
							Your += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:webform-client-form-* ATTR=ID:edit-submitted-i-want-to-buy-a-home-or-rent-a-home-to-own-but-am-having-difficulties-1 CONTENT=YES"+" \n";
							Your += "TAG POS=2 TYPE=LABEL FORM=ID:webform-client-form-7 ATTR=TXT:Yes"+" \n";
							Your += "TAG POS=3 TYPE=LABEL FORM=ID:webform-client-form-7 ATTR=TXT:Yes"+" \n";
							Your += "TAG POS=4 TYPE=LABEL FORM=ID:webform-client-form-7 ATTR=TXT:Yes"+" \n";
							Your += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-* ATTR=ID:edit-submitted-tcpa-1"+" \n";
							Your += "TAG POS=1 TYPE=BUTTON FORM=ID:webform-client-form-* ATTR=NAME:op"+" \n";
							Your += "WAIT SECONDS=15"+" \n";
							iimPlay(Your);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "TimeBucks"||title == "CUFI"||title == "Make Room"||title == "iPhone 7 or iPhone 7 Plus"||title == "Win $1,000")
				{ // 218 345
					try
					{
						switch(Check_Off)
						{ // CUFI | Make Room
							case "218":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Make_Room = "CODE:";
							Make_Room += "SET !ERRORIGNORE YES"+" \n";
							Make_Room += "SET !TIMEOUT_TAG 0 "+" \n";
							Make_Room += "SET !DATASOURCE Last_First.txt"+" \n";
							Make_Room += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
							Make_Room += "SET !DATASOURCE_COLUMNS 2"+" \n";
							Make_Room += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:action_page.php ATTR=NAME:firstname CONTENT={{!COL1}}"+" \n";
							Make_Room += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:action_page.php ATTR=NAME:lastname CONTENT={{!COL2}}"+" \n";
							Make_Room += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
							Make_Room += "SET !DATASOURCE_LINE 1"+" \n";
							Make_Room += "SET !DATASOURCE_COLUMNS 1"+" \n";
							Make_Room += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:action_page.php ATTR=NAME:email CONTENT={{!COL1}}"+" \n";
							Make_Room += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Make_Room += "SET !DATASOURCE_LINE 1"+" \n";
							Make_Room += "SET !DATASOURCE_COLUMNS 5 "+" \n";
							Make_Room += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:action_page.php ATTR=NAME:address CONTENT={{!COL2}}"+" \n";
							Make_Room += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:action_page.php ATTR=NAME:city CONTENT={{!COL3}}"+" \n";
							Make_Room += "TAG POS=1 TYPE=SELECT FORM=ACTION:action_page.php ATTR=ID:state CONTENT=%{{!COL4}}"+" \n";
							Make_Room += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:action_page.php ATTR=NAME:zip CONTENT={{!COL5}}"+" \n";
							Make_Room += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:action_page.php ATTR=*"+" \n";
							Make_Room += "WAIT SECONDS=10"+" \n";
							iimPlay(Make_Room);
							break;
						}
						switch(Check_Off)
						{ // TimeBucks
							case "345":
							var pass = Tao_Pass();
							var TimeBucks = "CODE:";
							TimeBucks += "SET !ERRORIGNORE YES"+"\n";
							TimeBucks += "SET !TIMEOUT_TAG 0"+"\n";
							TimeBucks += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							TimeBucks += "SET !DATASOURCE_LINE 1"+"\n";
							TimeBucks += "SET !DATASOURCE_COLUMNS 1"+"\n";
							TimeBucks += "FRAME F=2"+"\n";
							TimeBucks += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:signup-form ATTR=ID:signup_email CONTENT={{!COL1}}"+"\n";
							TimeBucks += "SET !ENCRYPTION NO"+"\n";
							TimeBucks += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:signup-form ATTR=ID:signup_password CONTENT="+pass+"\n";
							TimeBucks += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:signup-form ATTR=ID:signup_confirm_password CONTENT="+pass+"\n";
							TimeBucks += "TAG POS=1 TYPE=INPUT:BUTTON FORM=ID:signup-form ATTR=ID:signup_button_oneclick"+"\n";
							TimeBucks += "WAIT SECONDS=15"+"\n";
							iimPlay(TimeBucks);
							// var TimeBucks_Login = "CODE:";
							// TimeBucks_Login += "SET !ERRORIGNORE YES"+"\n";
							// TimeBucks_Login += "SET !TIMEOUT_TAG 0"+"\n";
							// TimeBucks_Login += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							// TimeBucks_Login += "SET !DATASOURCE_LINE 1"+"\n";
							// TimeBucks_Login += "SET !DATASOURCE_COLUMNS 1"+"\n";
							// TimeBucks_Login += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:loginbox ATTR=ID:username_box CONTENT={{!COL1}}"+"\n";
							// TimeBucks_Login += "SET !ENCRYPTION NO"+"\n";
							// TimeBucks_Login += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:loginbox ATTR=ID:password_box CONTENT=hyhgtfrd"+"\n";
							// TimeBucks_Login += "TAG POS=1 TYPE=INPUT:BUTTON FORM=ID:loginbox ATTR=*"+"\n";
							// iimPlay(TimeBucks_Login);
							break;
						}
						switch(Check_Off)
						{ // iPhone 7 | Win $1,000
							case "0":
							Win_$1000(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Vouchers Avenue : Iphone 8"||title == "Depend - Formstack"||title == "Simply Cellphones - Get a FREE or Subsized Cell Phone")
				{ //
					try
					{
						switch(Check_Off)
						{ // Vouchers Avenue
							case "0":
							Vouchers_Avenue(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Depend - Formstack
							case "0":
							Depend(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Simply Cellphones
							case "0":
							Simply(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Survey"||title == "ResourceDepot.info"||title == "Rent-to-Own Reviews |"||title == "- Save With Coupons")
				{ //
					try
					{	
						switch(Check_Off)
						{ // Survey
							case "0":
							var Random_Ngay = Math.floor((Math.random() * 9) + 1);
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_Nam = Math.floor((Math.random() * (1955 - 1945 + 1)) + 1945);
							var Survey = "CODE:";
							Survey += "SET !ERRORIGNORE YES "+" \n";
							Survey += "SET !TIMEOUT_TAG 0   "+" \n";
							Survey += 'SET !VAR1 EVAL("var min = 1; var max =2659; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;")'+" \n";
							Survey += "SET !DATASOURCE Last_First.txt"+" \n";
							Survey += "SET !DATASOURCE_LINE {{!VAR1}} "+" \n";
							Survey += "SET !DATASOURCE_COLUMNS 2"+" \n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-input-1293d2bd-75c2-498c-aec9-7cdf03832346-first-name" BUTTON=0'+" \n";
							Survey += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-1293d2bd-75c2-498c-aec9-7cdf03832346-first-name" CHARS="{{!COL1}}"'+" \n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-input-1293d2bd-75c2-498c-aec9-7cdf03832346-last-name" BUTTON=0'+" \n";
							Survey += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-1293d2bd-75c2-498c-aec9-7cdf03832346-last-name" CHARS="{{!COL2}}"'+" \n";
							// điền info
							Survey += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Survey += "SET !DATASOURCE_LINE 1"+" \n";
							Survey += "SET !DATASOURCE_COLUMNS 5"+" \n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-input-2ccb4e37-aab1-4494-b4fb-6d4b0e90f620-default" BUTTON=0'+" \n";
							Survey += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-2ccb4e37-aab1-4494-b4fb-6d4b0e90f620-default" CHARS="{{!COL2}}"'+" \n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-input-474e20df-0c8f-437b-b3ef-e9954f4d502b-default" BUTTON=0'+" \n";
							Survey += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-474e20df-0c8f-437b-b3ef-e9954f4d502b-default" CHARS="{{!COL5}}"'+" \n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-23afc927-7185-4dd7-aa83-526e7a108aef-default>DIV>DIV>LABEL>SPAN:nth-of-type(2)" BUTTON=0'+" \n";
							// Điền Mail
							Survey += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
							Survey += "SET !DATASOURCE_LINE 1"+" \n";
							Survey += "SET !DATASOURCE_COLUMNS 1"+" \n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-input-b55f80b0-4c1a-4d16-9917-a71ba8c622cf-default" BUTTON=0'+" \n";
							Survey += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-b55f80b0-4c1a-4d16-9917-a71ba8c622cf-default" CHARS="{{!COL1}}"'+" \n";
							// điền phone
							Survey += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
							Survey += "SET !DATASOURCE_LINE 1"+" \n";
							Survey += "SET !DATASOURCE_COLUMNS 5"+" \n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-input-415d7aa6-2f3f-4025-bf03-c6df409fa279-default" BUTTON=0'+" \n";
							Survey += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-415d7aa6-2f3f-4025-bf03-c6df409fa279-default" CHARS="{{!COL1}}"'+" \n";
							Survey += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-64ad3a4c-5a5a-4033-a6b6-f65278043fd8-month CONTENT=%"+Random_Ngay+" \n";
							Survey += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-64ad3a4c-5a5a-4033-a6b6-f65278043fd8-day CONTENT=%"+Random_Thang+" \n";
							Survey += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-64ad3a4c-5a5a-4033-a6b6-f65278043fd8-year CONTENT=%"+Random_Nam+" \n";
							Survey += "TAG POS=1 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey += "WAIT SECONDS=1"+"\n";
							Survey += "TAG POS=2 TYPE=SPAN ATTR=TXT:No"+"\n";
							Survey += "TAG POS=4 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey += "TAG POS=1 TYPE=SPAN ATTR=TXT:none"+"\n";
							Survey += "TAG POS=5 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey += "WAIT SECONDS=1"+"\n";
							Survey += "TAG POS=7 TYPE=SPAN ATTR=TXT:No"+"\n";
							Survey += "TAG POS=8 TYPE=SPAN ATTR=TXT:No"+"\n";
							Survey += 'EVENT TYPE=CLICK SELECTOR="#i-e3be7c4b-4036-4c57-83e2-66132c3a68fa" BUTTON=0'+" \n";
							iimPlay(Survey);
							iimPlayCode("WAIT SECONDS=3");
							var Survey_b2 = "CODE:";
							Survey_b2 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey_b2 += "TAG POS=2 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey_b2 += "TAG POS=3 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey_b2 += "TAG POS=4 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-677b51fc-855e-461c-9fed-3016b5807f72-default CONTENT=%030cd513-7731-41bc-bbda-3f66116d722d"+"\n";
							Survey_b2 += "TAG POS=5 TYPE=SPAN ATTR=TXT:No"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Receive<SP>daily<SP>offers,<SP>resources,<SP>and<SP>recipes*"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-52e59d26-3e14-40b0-bd74-3e942305f118"+"\n";
							Survey_b2 += "WAIT SECONDS=2"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Rent"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-60476912-2f03-4632-ba0c-36b70cf47566-default CONTENT=%88e139be-eede-4e3b-aa1c-801bba821dcf"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Yes"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Invokana"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-b6728da9-bb85-46ca-a3e0-33ae2c7fe25f"+"\n";
							Survey_b2 += "WAIT SECONDS=2"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-c5eff195-98ed-436a-877c-26708e2576d1"+"\n";
							Survey_b2 += "WAIT SECONDS=0.5"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-81e70e39-4094-49ad-98eb-bd57a579e463"+"\n";
							Survey_b2 += "WAIT SECONDS=0.5"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-0a437aec-54f9-4922-a234-f01793a29ed5"+"\n";
							Survey_b2 += "WAIT SECONDS=0.5"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-e734e225-b935-4d62-96c1-c9670fad0289"+"\n";
							Survey_b2 += "WAIT SECONDS=0.5"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-9ac5d749-a07a-4864-bb73-6f2372c71c20"+"\n";
							Survey_b2 += "WAIT SECONDS=0.5"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-f8a299e3-37c9-4770-af03-3e82fc999fb3"+"\n";
							Survey_b2 += "WAIT SECONDS=0.5"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-a98f55eb-2738-40be-9953-db907d8b998c"+"\n";
							Survey_b2 += "WAIT SECONDS=0.5"+"\n";
							Survey_b2 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-7e07e4aa-0158-493a-9bd0-2382dc9c527c"+"\n";
							Survey_b2 += "WAIT SECONDS=15"+"\n";
							iimPlay(Survey_b2);
							break;
						}
						switch(Check_Off)
						{ // ResourceDepot
							case "1":
							Find_Family_Support(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Rent-to-Own Reviews
							case "1":
							iimPlayCode("WAIT SECONDS=3");
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Rent_to_Own = "CODE:";
							Rent_to_Own += "SET !ERRORIGNORE YES"+"\n";
							Rent_to_Own += "SET !TIMEOUT_TAG 0"+"\n";
							Rent_to_Own += "SET !DATASOURCE Last_First.txt"+"\n";
							Rent_to_Own += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							Rent_to_Own += "SET !DATASOURCE_COLUMNS 2"+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-first-name CONTENT={{!COL1}}"+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-last-name CONTENT={{!COL2}}"+"\n";
							Rent_to_Own += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							Rent_to_Own += "SET !DATASOURCE_LINE 1"+"\n";
							Rent_to_Own += "SET !DATASOURCE_COLUMNS 5 "+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-phone-number CONTENT={{!COL1}}"+"\n";
							Rent_to_Own += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Rent_to_Own += "SET !DATASOURCE_LINE 1"+"\n";
							Rent_to_Own += "SET !DATASOURCE_COLUMNS 1 "+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-email-address CONTENT={{!COL1}}"+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-slc-1"+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-tax-2"+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-personalloan-1"+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-19 ATTR=ID:edit-submitted-tcpa-1"+"\n";
							Rent_to_Own += "TAG POS=1 TYPE=BUTTON FORM=ID:webform-client-form-19 ATTR=NAME:op"+"\n";
							Rent_to_Own += "WAIT SECONDS = 15"+"\n";
							iimPlay(Rent_to_Own);
							break;
						}
						switch(Check_Off)
						{ // Save With Coupons
							case "1":
							iimPlay(REFRESH_Site);
							var Coupons = "CODE:";
							Coupons += "SET !ERRORIGNORE YES"+"\n";
							Coupons += "SET !TIMEOUT_TAG 0"+"\n";
							Coupons += "FRAME NAME=\"ci_CouponsClickParentIframe\""+"\n";
							Coupons += "WAIT SECONDS = 2"+"\n";
							Coupons += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=TYPE:checkbox CONTENT=YES"+"\n";
							Coupons += "WAIT SECONDS = 2"+"\n";
							Coupons += "TAG POS=1 TYPE=BUTTON ATTR=CLASS:allButton<SP>split<SP>printButton<SP>mainButton"+"\n";
							Coupons += "TAG POS=1 TYPE=BUTTON ATTR=ID:buttonBatchPrintMessage&&CLASS:allButton<SP>secondaryButton<SP>batchPrintButton<SP>batchPrintMessage"+"\n";
							Coupons += "WAIT SECONDS = 20"+"\n";
							iimPlay(Coupons);
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "OMG Sweeps"||title == "Weight Loss Formula – Your Ultimate Slimming Guide"||title == "Gap - Get on the List"||title == "Lancome")
				{ // 308 330
					try
					{			
						switch(Check_Off)
						{ // Lay Info khac Neu Lam Off dang giong nhau
							case "0":
							line = 2;
							break;
						}
						switch(Check_Off)
						{ // Dang Lancome
							case "0":
							var line = 1;
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Pass = Tao_Pass();
							var Lancome = "CODE:";
							Lancome += "SET !ERRORIGNORE YES"+"\n";
							Lancome += "SET !TIMEOUT_TAG 0"+"\n";
							Lancome += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Lancome += "SET !DATASOURCE_LINE "+line+"\n";
							Lancome += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:email CONTENT={{!COL1}}"+"\n";
							Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:confirm_email CONTENT={{!COL1}}"+"\n";
							Lancome += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/s/link/acq ATTR=*"+"\n";
							Lancome += "SET !TIMEOUT_TAG 30"+" \n";
							Lancome += "TAG POS=2 TYPE=INPUT:EMAIL FORM=ID:dwfrm_newsletter ATTR=ID:dwfrm_newsletter_email CONTENT={{!COL1}}"+"\n";
							Lancome += "TAG POS=1 TYPE=BUTTON FORM=ID:dwfrm_newsletter ATTR=ID:newsletter-submit"+"\n";
							Lancome += "SET !TIMEOUT_TAG 0"+" \n";
							Lancome += "WAIT SECONDS = 10"+"\n";
							Lancome += "SET !DATASOURCE Last_First.txt"+"\n";
							Lancome += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							Lancome += "SET !DATASOURCE_COLUMNS 2"+"\n";
							Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_customer_firstname CONTENT={{!COL1}}"+"\n";
							Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_customer_lastname CONTENT={{!COL2}}"+"\n";
							Lancome += "SET !ENCRYPTION NO"+"\n";
							Lancome += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_login_password CONTENT="+Pass+"\n";
							Lancome += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_login_passwordconfirm CONTENT="+Pass+"\n";
							Lancome += "TAG POS=1 TYPE=BUTTON FORM=ID:RegistrationForm ATTR=NAME:dwfrm_profile_confirm"+"\n";
							Lancome += "WAIT SECONDS = 30"+"\n";
							iimPlay(Lancome);
							break;							
						}
						switch(Check_Off)
						{ // Gap  OMG
							case "0": 
							var Gap = "CODE:";
							Gap += "SET !ERRORIGNORE YES"+"\n";
							Gap += "SET !TIMEOUT_TAG 0"+"\n";
							Gap += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Gap += "SET !DATASOURCE_LINE 1"+"\n";
							Gap += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Gap += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:email CONTENT={{!COL1}}"+"\n";
							Gap += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ACTION:/s/link/acq ATTR=SRC:http://link.gap.csemleng.net/site/11191/images/gap-cs-lp-submit-button-11-20-17-001.png"+"\n";
							Gap += "WAIT SECONDS = 20"+" \n";
							iimPlay(Gap);
							break;
							case "330": 
							var OMG = "CODE:";
							OMG += "SET !ERRORIGNORE YES"+"\n";
							OMG += "SET !TIMEOUT_TAG 0"+"\n";
							OMG += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							OMG += "SET !DATASOURCE_LINE 1"+"\n";
							OMG += "SET !DATASOURCE_COLUMNS 1"+"\n";
							OMG += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:omgForm ATTR=ID:txt_email CONTENT={{!COL1}}"+"\n";
							OMG += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ID:omgForm ATTR=SRC:https://d3v7hbq4afry8x.cloudfront.net/images/button_enternow.png"+"\n";
							OMG += "WAIT SECONDS = 10"+" \n";
							iimPlay(OMG);
							break;
						}
						switch(Check_Off)
						{ // 308
							case "308":
							var Lancome_Loai_2 = "CODE:";
							Lancome_Loai_2 += "SET !ERRORIGNORE YES"+"\n";
							Lancome_Loai_2 += "SET !TIMEOUT_TAG 0"+"\n";
							Lancome_Loai_2 += "TAG POS=1 TYPE=A ATTR=TXT:OR<SP>GET<SP>IT<SP>FREE"+" \n";
							Lancome_Loai_2 += "TAB T=2"+" \n";
							Lancome_Loai_2 += "TAG POS=2 TYPE=A ATTR=TXT:FREE"+" \n";
							Lancome_Loai_2 += "TAB T=3"+" \n";
							iimPlay(Lancome_Loai_2);
							iimPlayCode("WAIT SECONDS = 1");
							var title = window.document.title;
							if(title == "Lancome")
							{
								var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
								var Pass = Tao_Pass();
								var Lancome = "CODE:";
								Lancome += "SET !ERRORIGNORE YES"+"\n";
								Lancome += "SET !TIMEOUT_TAG 0"+"\n";
								Lancome += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
								Lancome += "SET !DATASOURCE_LINE 1"+"\n";
								Lancome += "SET !DATASOURCE_COLUMNS 1"+"\n";
								Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:email CONTENT={{!COL1}}"+"\n";
								Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:confirm_email CONTENT={{!COL1}}"+"\n";
								Lancome += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/s/link/acq ATTR=*"+"\n";
								Lancome += "SET !TIMEOUT_TAG 30"+" \n";
								Lancome += "TAG POS=2 TYPE=INPUT:EMAIL FORM=ID:dwfrm_newsletter ATTR=ID:dwfrm_newsletter_email CONTENT={{!COL1}}"+"\n";
								Lancome += "TAG POS=1 TYPE=BUTTON FORM=ID:dwfrm_newsletter ATTR=ID:newsletter-submit"+"\n";
								Lancome += "SET !TIMEOUT_TAG 0"+" \n";
								Lancome += "WAIT SECONDS = 10"+"\n";
								Lancome += "SET !DATASOURCE Last_First.txt"+"\n";
								Lancome += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
								Lancome += "SET !DATASOURCE_COLUMNS 2"+"\n";
								Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_customer_firstname CONTENT={{!COL1}}"+"\n";
								Lancome += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_customer_lastname CONTENT={{!COL2}}"+"\n";
								Lancome += "SET !ENCRYPTION NO"+"\n";
								Lancome += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_login_password CONTENT="+Pass+"\n";
								Lancome += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:RegistrationForm ATTR=ID:dwfrm_profile_login_passwordconfirm CONTENT="+Pass+"\n";
								Lancome += "TAG POS=1 TYPE=BUTTON FORM=ID:RegistrationForm ATTR=NAME:dwfrm_profile_confirm"+"\n";
								Lancome += "WAIT SECONDS = 30"+"\n";
								iimPlay(Lancome);
							}
							else if(title == "Earn Points With Kellogg's Family Rewards")
							{// chưa test code
								var Family = "CODE:";
								Family += "SET !ERRORIGNORE YES"+"\n";
								Family += "SET !TIMEOUT_TAG 0"+"\n";
								Family += "EVENT TYPE=CLICK SELECTOR=\"#printArea>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>CENTER>A>IMG\" BUTTON=0"+"\n";
								Family += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
								Family += "SET !DATASOURCE_LINE 1"+"\n";
								Family += "SET !DATASOURCE_COLUMNS 1"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:KSTL-Registration-UserName CONTENT={{!COL1}}"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:KSTL-Registration-UserNameConfirm CONTENT={{!COL1}}"+"\n";
								Family += "SET !ENCRYPTION NO"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:KSTL-Registration-Password CONTENT=G$1ygtfrd"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:KSTL-Registration-PasswordConfirm CONTENT=G$1ygtfrd"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:KSTL-Registration-BirthDate CONTENT=6/5/1989"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:KSTL-Registration-PrivacyPolicy CONTENT=YES"+"\n";
								Family += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Continue"+"\n";
								Family += "WAIT SECONDS = 5"+"\n";
								Family += "SET !DATASOURCE Last_First.txt"+"\n";
								Family += "SET !DATASOURCE_LINE 3"+"\n";
								Family += "SET !DATASOURCE_COLUMNS 2  "+"\n";
								Family += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:KSTL-Registration-TermsConditions1 CONTENT=YES"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:KSTL-Registration-FirstName CONTENT={{!COL1}}"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:KSTL-Registration-LastName CONTENT={{!COL2}}"+"\n";
								Family += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
								Family += "SET !DATASOURCE_LINE 1"+"\n";
								Family += "SET !DATASOURCE_COLUMNS 5 "+"\n";
								Family += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:KSTL-Registration-AddressLine1 CONTENT={{!COL2}}"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:KSTL-Registration-City CONTENT={{!COL3}}"+"\n";
								Family += "TAG POS=1 TYPE=SELECT ATTR=ID:KSTL-Registration-State CONTENT=%4"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:KSTL-Registration-PostalCode CONTENT={{!COL5}}"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:TEL ATTR=ID:KSTL-Registration-PhoneNumber1 CONTENT={{!COL1}}"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:RADIO ATTR=ID:KSTL-Registration-Gender-0"+"\n";
								Family += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:KSTL-Registration-subscription10100_PH CONTENT=YES"+"\n";
								Family += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Continue"+"\n";
								Family += "WAIT SECONDS = 5"+"\n";
								iimPlay(Family);
							}
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Official Rosetta Stone® - Try Our Free Demo"||title == "Register To Play"||title == "Disney"||title == "Vaniki US"||title == "Winter Samples")
				{ // 164 165 167 73 106 112 128 138 448 449 450 477
					try
					{
						switch(Check_Off)
						{ // Register To Play
							case "477":case "167":case "164":case "165":
							var Register_To_Play = "CODE:";
							Register_To_Play += "SET !ERRORIGNORE YES"+"\n";
							Register_To_Play += "SET !TIMEOUT_TAG 0"+"\n";
							Register_To_Play += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Register_To_Play += "SET !DATASOURCE_LINE 1"+"\n";
							Register_To_Play += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Register_To_Play += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:* CONTENT={{!COL1}}"+"\n";
							Register_To_Play += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
							Register_To_Play += "WAIT SECONDS = 15"+"\n";
							iimPlay(Register_To_Play);
							break;
							case "0":
							Giveaway(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Disney
							case "138":case "128":case "112":case "106":case "73":
							var Ngay = ["February","March","April","May","June","August","January"];
							var random_Ngay = Math.floor((Math.random() * 6) + 0);
							var Thang = Math.floor((Math.random() * 9) + 1);
							var Nam = Math.floor((Math.random() * (1989 - 1985 + 1)) + 1985);
							var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var random1 = Math.floor((Math.random() * 6) + 1);
							var Disney = "CODE:";
							Disney += "SET !ERRORIGNORE YES"+"\n";
							Disney += "SET !TIMEOUT_TAG 50"+"\n";
							Disney += "FRAME F=1"+"\n";
							Disney += "EVENT TYPE=CLICK SELECTOR=\"#undefined\" BUTTON=0"+"\n";
							Disney += "SET !TIMEOUT_TAG 0"+"\n";
							Disney += "TAB T=2"+"\n";
							Disney += "WAIT SECONDS=2"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:blah ATTR=ID:selectedpark-WDW"+"\n";
							Disney += "TAG POS=1 TYPE=LI ATTR=TXT:"+Ngay[random_Ngay]+"\n";
							Disney += "TAG POS=1 TYPE=LI ATTR=TXT:0"+Thang+"\n";
							Disney += "TAG POS=1 TYPE=LI ATTR=TXT:"+Nam+"\n";
							Disney += "SET !DATASOURCE Last_First.txt"+"\n";
							Disney += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
							Disney += "SET !DATASOURCE_COLUMNS 2  "+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:blah ATTR=ID:firstname CONTENT={{!COL1}}"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:blah ATTR=ID:lastname CONTENT={{!COL2}}"+"\n";
							Disney += "TAG POS=1 TYPE=LI ATTR=TXT:United<SP>States"+"\n";
							Disney += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							Disney += "SET !DATASOURCE_LINE 1"+"\n";
							Disney += "SET !DATASOURCE_COLUMNS 5"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:blah ATTR=ID:address1 CONTENT={{!COL2}}"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:blah ATTR=ID:city CONTENT={{!COL3}}"+"\n";
							Disney += "TAG POS=1 TYPE=LI ATTR=TXT:California"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:blah ATTR=ID:zip CONTENT={{!COL5}}"+"\n";
							Disney += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Disney += "SET !DATASOURCE_LINE 1"+"\n";
							Disney += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:blah ATTR=ID:emailaddress CONTENT={{!COL1}}"+"\n";
							Disney += "TAG POS=2 TYPE=SPAN ATTR=TXT:Continue"+"\n";
							Disney += "WAIT SECONDS=2"+"\n";
							Disney += "TAG POS=1 TYPE=DIV ATTR=TXT:"+"\n";
							Disney += "TAG POS=1 TYPE=A ATTR=ID:wdwtotalvisits_3"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:RANGE FORM=ID:vpd-travel-interest-form ATTR=ID:wdwprevfiveyears CONTENT=2"+"\n";
							Disney += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:vpd-travel-interest-form ATTR=ID:vpdInterestsPartyMonth_0"+random1+"\n";
							Disney += "TAG POS=1 TYPE=A ATTR=ID:travelwithchildren_NO"+"\n";
							Disney += "TAG POS=1 TYPE=DIV ATTR=ID:dlrinterest-label"+"\n";
							Disney += "TAG POS=2 TYPE=SPAN ATTR=TXT:Finish"+"\n";
							Disney += "WAIT SECONDS=20"+"\n";
							iimPlay(Disney);
							break;
						}
						switch(Check_Off)
						{ // Vaniki
							case "450":case "449":case "448":
							Vaniki(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // QualityHealth | Winter Samples
							case "7":
							QualityHealth(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{ // Rosetta
							case "0":
							var Rosetta = "CODE:";
							Rosetta += "SET !ERRORIGNORE YES  "+"\n";
							Rosetta += "SET !TIMEOUT_TAG 0 "+"\n";
							Rosetta += "TAG POS=1 TYPE=DIV ATTR=ID:default-option"+"\n";
							Rosetta += "TAG POS=2 TYPE=LI ATTR=TXT:English<SP>(American)"+"\n";
							Rosetta += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Rosetta += "SET !DATASOURCE_LINE 1"+"\n";
							Rosetta += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Rosetta += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=* CONTENT={{!COL1}}"+"\n";
							Rosetta += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*"+"\n";
							Rosetta += "WAIT SECONDS=5"+"\n";
							Rosetta += "TAG POS=1 TYPE=A ATTR=TXT:SHOP<SP>NOW"+"\n";
							Rosetta += "WAIT SECONDS=25"+"\n";
							iimPlay(Rosetta);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "YourCardSearch: Credit Card Matching"||title == "Visa Pre-paidcard"||title == "XMAS"||title == "(1) Amazon Gift!"||title == "$500 Amazon Gift Card"||title == "Get a Gift Card")
				{ // 224 385
					try
					{
						switch(Check_Off)
						{
							case "224":
							Amazon(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{
							case "0":
							Amazon_$500(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{
							case "0":
							Get_a_Gift_Card(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{// YourCardSearch: Credit Card Matching
							case "385":
							var Stt = Math.floor((Math.random() * 5) + 2);
							var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var YourCardSearch = "CODE:";
							YourCardSearch += "SET !ERRORIGNORE YES"+"\n";
							YourCardSearch += "SET !TIMEOUT_TAG 0"+"\n";
							YourCardSearch += "SET !DATASOURCE Last_First.txt"+"\n";
							YourCardSearch += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
							YourCardSearch += "SET !DATASOURCE_COLUMNS 2"+"\n";
							YourCardSearch += "FRAME F=1"+"\n";
							YourCardSearch += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:theForm ATTR=NAME:First_Name CONTENT={{!COL1}}"+"\n";
							YourCardSearch += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							YourCardSearch += "SET !DATASOURCE_LINE 1"+"\n";
							YourCardSearch += "SET !DATASOURCE_COLUMNS 1"+"\n";
							YourCardSearch += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:theForm ATTR=NAME:Email CONTENT={{!COL1}}"+"\n";
							YourCardSearch += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							YourCardSearch += "SET !DATASOURCE_LINE 1"+"\n";
							YourCardSearch += "SET !DATASOURCE_COLUMNS 5"+"\n";
							YourCardSearch += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:theForm ATTR=NAME:Phone CONTENT={{!COL1}}"+"\n";
							YourCardSearch += "EVENT TYPE=CLICK SELECTOR=\"#Credit\" BUTTON=0"+"\n";
							YourCardSearch += "EVENT TYPE=CLICK SELECTOR=\"#Credit>OPTION:nth-of-type("+Stt+")\" BUTTON=0"+"\n";
							YourCardSearch += "TAG POS=1 TYPE=INS ATTR=CLASS:iCheck-helper&&TXT:"+"\n";
							YourCardSearch += "WAIT SECONDS=1"+"\n";
							YourCardSearch += "TAG POS=1 TYPE=BUTTON FORM=ID:theForm ATTR=TXT:Search"+"\n";
							YourCardSearch += "WAIT SECONDS=5"+"\n";
							YourCardSearch += "FRAME F=0"+"\n";
							YourCardSearch += "TAG POS=1 TYPE=A ATTR=TXT:Visit<SP>Site"+"\n";
							YourCardSearch += "TAG POS=2 TYPE=A ATTR=TXT:Visit<SP>Site"+"\n";
							YourCardSearch += "WAIT SECONDS=20"+"\n";
							iimPlay(YourCardSearch);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "myrewardscenter.us.com"||title == "FavoriteConsumerBrands.com"||title == "ConsumerRewards.us.com")
				{// 103
					try
					{
						switch(Check_Off)
						{
							case "103":
							FavoriteConsumerBrands(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{
							case "0":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Random_Ngay = Math.floor((Math.random() * 9) + 1);
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
							var us_com = "CODE:";
							us_com += "SET !ERRORIGNORE YES"+"\n";
							us_com += "SET !TIMEOUT_TAG 0 "+"\n";
							us_com += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							us_com += "SET !DATASOURCE_LINE 1"+"\n";
							us_com += "SET !DATASOURCE_COLUMNS 1"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/?session_id=* ATTR=ID:email CONTENT={{!COL1}}"+"\n";
							us_com += "TAG POS=1 TYPE=SPAN ATTR=TXT:"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:/?session_id=* ATTR=ID:resident CONTENT=YES"+"\n";
							us_com += "WAIT SECONDS=5"+"\n";
							us_com += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/?session_id=* ATTR=TXT:Continue"+"\n";
							us_com += "WAIT SECONDS=10"+"\n";
							us_com += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							us_com += "SET !DATASOURCE_COLUMNS 2"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:fname CONTENT={{!COL1}}"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:lname CONTENT={{!COL2}}"+"\n";
							us_com += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							us_com += "SET !DATASOURCE_LINE 1"+"\n";
							us_com += "SET !DATASOURCE_COLUMNS 5"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:zip CONTENT={{!COL5}}"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:address CONTENT={{!COL2}}"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:dob_month_digit CONTENT="+Random_Ngay+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:dob_day CONTENT="+Random_Thang+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:dob_year CONTENT="+Random_Nam+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:phone CONTENT={{!COL1}}"+"\n";
							us_com += "TAG POS=1 TYPE=SPAN ATTR=TXT:"+"\n";
							us_com += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:reg-form ATTR=ID:gender-male"+"\n";
							us_com += "TAG POS=1 TYPE=BUTTON FORM=ID:reg-form ATTR=TXT:Continue"+"\n";
							us_com += "WAIT SECONDS=20"+"\n";
							iimPlay(us_com);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "EverydayFamily.com - Get FREE Baby Samples in your mailbox!"||title == "Publishers Clearing House - Win $2,600,000 Plus $5,000 a Week for Life!")
				{// 148 211 300
					try
					{
						switch(Check_Off)
						{
							case "148":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Random_Nam = Math.floor((Math.random() * (2017 - 2010  + 1)) + 2010 );
							var Random_Ngay = Math.floor((Math.random() * 9) + 1);
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_checkbox = Math.floor((Math.random() * 6) + 1);
							var EverydayFamily = "CODE:";
							EverydayFamily += "SET !ERRORIGNORE YES"+"\n";
							EverydayFamily += "SET !TIMEOUT_TAG 0 "+"\n";
							EverydayFamily += "SET !DATASOURCE Last_First.txt"+"\n";
							EverydayFamily += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							EverydayFamily += "SET !DATASOURCE_COLUMNS 2  "+"\n";
							EverydayFamily += "TAG POS="+Random_checkbox+" TYPE=SPAN ATTR=TXT:"+"\n";
							EverydayFamily += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:lpform ATTR=ID:fn CONTENT={{!COL1}}"+"\n";
							EverydayFamily += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							EverydayFamily += "SET !DATASOURCE_LINE 1"+"\n";
							EverydayFamily += "SET !DATASOURCE_COLUMNS 1"+"\n";
							EverydayFamily += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:lpform ATTR=ID:e CONTENT={{!COL1}}"+"\n";
							EverydayFamily += "TAG POS=1 TYPE=SELECT FORM=NAME:lpform ATTR=ID:due_date_month CONTENT=%"+Random_Thang+"\n";
							EverydayFamily += "TAG POS=1 TYPE=SELECT FORM=NAME:lpform ATTR=ID:due_date_day CONTENT=%"+Random_Ngay+"\n";
							EverydayFamily += "TAG POS=1 TYPE=SELECT FORM=NAME:lpform ATTR=ID:due_date_year CONTENT=%"+Random_Nam+"\n";
							EverydayFamily += "TAG POS=1 TYPE=A ATTR=TXT:Join<SP>Now<SP>>>"+"\n";
							EverydayFamily += "WAIT SECONDS=20"+"\n";
							iimPlay(EverydayFamily);
							break;
						}
						switch(Check_Off)
						{
							case "300":case "211":
							var PCH = "CODE:";
							PCH += "SET !ERRORIGNORE YES"+"\n";
							PCH += "SET !TIMEOUT_TAG 0"+"\n";
							PCH += "SET !DATASOURCE Last_First.txt"+"\n";
							PCH += "SET !DATASOURCE_LINE 3"+"\n";
							PCH += "SET !DATASOURCE_COLUMNS 2  "+"\n";
							PCH += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:First_Name CONTENT={{!COL1}}"+"\n";
							PCH += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:Last_Name CONTENT={{!COL2}}"+"\n";
							PCH += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							PCH += "SET !DATASOURCE_LINE 1"+"\n";
							PCH += "SET !DATASOURCE_COLUMNS 1 "+"\n";
							PCH += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:email CONTENT={{!COL1}}"+"\n";
							PCH += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/s/link/acq ATTR=ID:confirm_email CONTENT={{!COL1}}"+"\n";
							PCH += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ACTION:/s/link/acq ATTR=SRC:http://link.e.pchgiveaway.com/site/9039/images/btn-cs-lp-6-20-16-001.gif"+"\n";
							PCH += "WAIT SECONDS=20"+"\n";
							iimPlay(PCH);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "LivingWIthPain.org"||title == "Rent 2 Own Homes"||title == "Enfamil_WF - Formstack"||title == "Sign up now for access to your exclusive offers!"||title == "Opinion City")
				{// 213 219 292 305 299 310 306 147 257 294 311 481
					try
					{
						switch(Check_Off)
						{ // chưa code xong
							case "213":
							var Random_checkbox = ["9","10","11","13","14"];
							var RD = Math.floor((Math.random() * 4) + 0);
							var LivingWIthPain = "CODE:";
							LivingWIthPain += "SET !ERRORIGNORE YES"+"\n";
							LivingWIthPain += "SET !TIMEOUT_TAG 0"+"\n";
							LivingWIthPain += "SET !DATASOURCE Last_First.txt"+"\n";
							LivingWIthPain += "SET !DATASOURCE_LINE 4"+"\n";
							LivingWIthPain += "SET !DATASOURCE_COLUMNS 2"+"\n";
							LivingWIthPain += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:wf-form-about ATTR=ID:name-2 CONTENT={{!COL1}}"+"\n";
							LivingWIthPain += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:wf-form-about ATTR=ID:Last-Name-3 CONTENT={{!COL2}}"+"\n";
							LivingWIthPain += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							LivingWIthPain += "SET !DATASOURCE_LINE 1"+"\n";
							LivingWIthPain += "SET !DATASOURCE_COLUMNS 1"+"\n";
							LivingWIthPain += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:wf-form-about ATTR=ID:email-2 CONTENT={{!COL1}}"+"\n";
							LivingWIthPain += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							LivingWIthPain += "SET !DATASOURCE_LINE 1"+"\n";
							LivingWIthPain += "SET !DATASOURCE_COLUMNS 5"+"\n";
							LivingWIthPain += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:wf-form-about ATTR=ID:Phone-2 CONTENT={{!COL1}} "+"\n";
							LivingWIthPain += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:wf-form-about ATTR=ID:field-2 CONTENT={{!COL5}} "+"\n";
							LivingWIthPain += "EVENT TYPE=CLICK SELECTOR=\"#checkbox-"+Random_checkbox[RD]+"\" BUTTON=0"+"\n";
							LivingWIthPain += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:wf-form-about ATTR=ID:checkbox CONTENT=YES"+"\n";
							LivingWIthPain += "TAG POS=1 TYPE=A ATTR=ID:start"+"\n";
							iimPlay(LivingWIthPain);
							break;
						}
						switch(Check_Off)
						{// Rent 2 Own Homes
							case "219":
							var Random_Phon0 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
							var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
							var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);
							var Rent_2_Own_Homes = "CODE:";
							Rent_2_Own_Homes += "SET !ERRORIGNORE YES"+"\n";
							Rent_2_Own_Homes += "SET !TIMEOUT_TAG 0"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE_LINE 1"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE_COLUMNS 5"+"\n";
							Rent_2_Own_Homes += "EVENT TYPE=CLICK SELECTOR=\"#zip\" BUTTON=0"+"\n";
							Rent_2_Own_Homes += "EVENTS TYPE=KEYPRESS SELECTOR=\"#zip\" CHARS={{!COL5}}"+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=BUTTON ATTR=TXT:SEARCH"+"\n";
							Rent_2_Own_Homes += "WAIT SECONDS=1"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE Last_First.txt"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE_LINE 3"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE_COLUMNS 2  "+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form1 ATTR=ID:first CONTENT={{!COL1}}"+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form1 ATTR=ID:last CONTENT={{!COL2}}"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE_LINE 1"+"\n";
							Rent_2_Own_Homes += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:form1 ATTR=ID:email CONTENT={{!COL1}}"+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:form1 ATTR=ID:phone CONTENT=("+Random_Phon0+")<SP>"+Random_Phon1+"-"+Random_Phon2+""+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=BUTTON FORM=ID:form1 ATTR=TXT:View<SP>Listings"+"\n";
							Rent_2_Own_Homes += "WAIT SECONDS=0.5"+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=BUTTON ATTR=TXT:YES"+"\n";
							Rent_2_Own_Homes += "WAIT SECONDS=0.5"+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=A ATTR=TXT:Not<SP>interested<SP>in<SP>repairing<SP>my<SP>credit"+"\n";
							Rent_2_Own_Homes += "WAIT SECONDS=0.5"+"\n";
							Rent_2_Own_Homes += "TAG POS=1 TYPE=BUTTON ATTR=ID:btnCredit"+"\n";
							Rent_2_Own_Homes += "WAIT SECONDS=15"+"\n";
							iimPlay(Rent_2_Own_Homes);
							break;
						}
						switch(Check_Off)
						{// Enfamil_WF
							case "481":case "311":case "294":case "299":case "305":case "292":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Random_Ngay = Math.floor((Math.random() * 9) + 1);
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_Nam = Math.floor((Math.random() * (1989 - 1973  + 1)) + 1973 );
							var Enfamil_WF = "CODE:";
							Enfamil_WF += "SET !ERRORIGNORE YES"+"\n";
							Enfamil_WF += "SET !TIMEOUT_TAG 0"+"\n";
							Enfamil_WF += "SET !DATASOURCE Last_First.txt"+"\n";
							Enfamil_WF += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							Enfamil_WF += "SET !DATASOURCE_COLUMNS 2"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:fsForm2915699 ATTR=ID:field59646738_1"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2915699 ATTR=ID:field59646715-first CONTENT={{!COL1}}"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2915699 ATTR=ID:field59646715-last CONTENT={{!COL2}}"+"\n";
							Enfamil_WF += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Enfamil_WF += "SET !DATASOURCE_LINE 1"+"\n";
							Enfamil_WF += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:fsForm2915699 ATTR=ID:field59646719 CONTENT={{!COL1}}"+"\n";
							Enfamil_WF += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							Enfamil_WF += "SET !DATASOURCE_LINE 1"+"\n";
							Enfamil_WF += "SET !DATASOURCE_COLUMNS 5"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2915699 ATTR=ID:field59646862 CONTENT={{!COL2}}"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2915699 ATTR=ID:field59646863 CONTENT={{!COL3}}"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field59646864 CONTENT=%{{!COL4}}"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2915699 ATTR=ID:field59646867 CONTENT={{!COL5}}"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field60048361M CONTENT=%0"+Random_Ngay+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field60048361D CONTENT=%0"+Random_Thang+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field60048361Y CONTENT=%"+Random_Nam+"\n";
							Enfamil_WF += "WAIT SECONDS=1"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field59647580M CONTENT=%0"+Random_Ngay+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field59647580D CONTENT=%0"+Random_Thang+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field59647580Y CONTENT=%2018"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field59647584 CONTENT=%0002"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2915699 ATTR=ID:field59647902 CONTENT=%1"+"\n";
							Enfamil_WF += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:fsForm2915699 ATTR=ID:fsSubmitButton2915699"+"\n";
							Enfamil_WF += "WAIT SECONDS=15"+"\n";
							iimPlay(Enfamil_WF);
							break;
						}
						switch(Check_Off)
						{// Atkins
							case "306":case "310":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Random_Tuoi = Math.floor((Math.random() * 30) + 19);
							var Dieting_Solutions = "CODE:";
							Dieting_Solutions += "SET !ERRORIGNORE YES"+"\n";
							Dieting_Solutions += "SET !TIMEOUT_TAG 0"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:offerForm ATTR=NAME:optin"+"\n";
							Dieting_Solutions += "TAG POS=2 TYPE=INPUT:RADIO FORM=ID:offerForm ATTR=NAME:gender"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:NUMBER FORM=ID:offerForm ATTR=ID:age CONTENT="+Random_Tuoi+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Continue"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
							Dieting_Solutions += "TAG POS=5 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
							Dieting_Solutions += "TAG POS=10 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Click<SP>Here<SP>To<SP>Get<SP>Your<SP>Free<SP>Samples"+"\n";
							Dieting_Solutions += "WAIT SECONDS = 3"+"\n";
							Dieting_Solutions += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_LINE 1"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:offerForm ATTR=NAME:email CONTENT={{!COL1}}"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Submit"+"\n";
							Dieting_Solutions += "WAIT SECONDS = 3"+"\n";
							Dieting_Solutions += "EVENT TYPE=CLICK SELECTOR=\"#slot>A>IMG\" BUTTON=0"+"\n";
							iimPlay(Dieting_Solutions);
							iimPlayCode("TAB T=2");
							iimPlayCode("WAIT SECONDS=1");
							var title = window.document.title;
							if(title == "Free Weight Loss Starter Kit Registration | Atkins")
							{
								var Atkins = "CODE:";
								Atkins += "SET !ERRORIGNORE YES"+"\n";
								Atkins += "SET !TIMEOUT_TAG 0"+"\n";
								Atkins += "SET !DATASOURCE Last_First.txt"+"\n";
								Atkins += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
								Atkins += "SET !DATASOURCE_COLUMNS 2"+"\n";
								Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:first_name CONTENT={{!COL1}}"+"\n";
								Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:last_name CONTENT={{!COL2}}"+"\n";
								Atkins += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
								Atkins += "SET !DATASOURCE_LINE 1"+"\n";
								Atkins += "SET !DATASOURCE_COLUMNS 1"+"\n";
								Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email CONTENT={{!COL1}}"+"\n";
								Atkins += "SET !DATASOURCE Last_First.txt"+"\n";
								Atkins += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
								Atkins += "SET !DATASOURCE_COLUMNS 2"+"\n";
								Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:username CONTENT={{!COL1}}{{!COL2}}"+"\n";
								Atkins += "SET !ENCRYPTION NO"+"\n";
								Atkins += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT=hjuhygtde"+"\n";
								Atkins += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password_confirmation CONTENT=hjuhygtde"+"\n";
								Atkins += "TAG POS=3 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*"+"\n";
								Atkins += "TAG POS=1 TYPE=A ATTR=TXT:Get<SP>Started<SP>»"+"\n";
								Atkins += "WAIT SECONDS = 20"+"\n";
								iimPlay(Atkins);
							}
							break;
						}
						switch(Check_Off)
						{// Opinion			
							case "257":case "147":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Random_Ngay = Math.floor((Math.random() * 9) + 1);
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
							var Random_Phon1 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
							var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111  + 1)) + 1111 );
							var Opinion = "CODE:";
							Opinion += "SET !ERRORIGNORE YES"+"\n";
							Opinion += "SET !TIMEOUT_TAG 0 "+"\n";
							Opinion += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Opinion += "SET !DATASOURCE_LINE 1"+"\n";
							Opinion += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:email CONTENT={{!COL1}}"+"\n";
							Opinion += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Continue"+"\n";
							Opinion += "WAIT SECONDS=10"+"\n";
							Opinion += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Continue"+"\n";
							Opinion += "SET !DATASOURCE Last_First.txt"+"\n";
							Opinion += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							Opinion += "SET !DATASOURCE_COLUMNS 2  "+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:first_name CONTENT={{!COL1}}"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:last_name CONTENT={{!COL2}}"+"\n";
							Opinion += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:gender CONTENT=%F"+"\n";
							Opinion += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:dob_month CONTENT=%"+Random_Ngay+"\n";
							Opinion += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:dob_day CONTENT=%"+Random_Thang+"\n";
							Opinion += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:dob_year CONTENT=%"+Random_Nam+"\n";
							Opinion += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							Opinion += "SET !DATASOURCE_LINE 1"+"\n";
							Opinion += "SET !DATASOURCE_COLUMNS 5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:address1 CONTENT={{!COL2}}"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:zip CONTENT={{!COL5}}"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:phone1 CONTENT=301"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:phone2 CONTENT="+Random_Phon1+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:phone3 CONTENT="+Random_Phon2+"\n";
							Opinion += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=FOR:checkbox&&TXT:"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:checkbox CONTENT=YES"+"\n";
							Opinion += "WAIT SECONDS=10"+"\n";
							Opinion += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>SECTION:nth-of-type(2)>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
							Opinion += "WAIT SECONDS=10"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=2 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=2 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON FORM=ID:dropdownOfferForm ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=2 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=2 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=2 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=INPUT:BUTTON FORM=ID:dropdownOfferForm ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=2 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=2 TYPE=INPUT:BUTTON ATTR=NAME:answer"+"\n";
							Opinion += "WAIT SECONDS=0.5"+"\n";
							Opinion += "TAG POS=1 TYPE=BUTTON ATTR=ID:continueBtn"+"\n";
							Opinion += "WAIT SECONDS=20"+"\n";
							iimPlay(Opinion);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Samples Avenue : free samples cosmetics"||title == "Get Samples"||title == "Local Rent-to-Own Homes | Buy and sell mobile homes in your area")
				{// 473 474 476 485
					try
					{
						switch(Check_Off)
						{// Local_Rent_to_Own_Homes
							case "474":case "473":
							Local_Rent_to_Own_Homes(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{// Get Samples
							case "476":
							Get_Samples(File_Mail_info);
							break;
						}
						switch(Check_Off)
						{// Samples Avenue
							case "485": // con này cho chạy cuối
							Samples_Avenue(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Check Title Offers")
				{// Code Mẫu    
					try
					{
						switch(Check_Off)
						{
							case "Mã_Off":
							Ham_lam_viec(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title.indexOf("Listerine®")||title.indexOf("Summer Gift Card")||title.indexOf("Bed Bath & Beyond®")||title.indexOf("PS4® Pro Visa® Gift Card")||title.indexOf("Nintendo® Switch Gift Card")||title.indexOf("Aldi® Gift Card")||title.indexOf("Hardrock® Gift Card")||title.indexOf("Wish I had a Wet Ones® this cough & cold season")||title.indexOf("Super Mario Odyssey® Game")||title == "Survey Voices"||title.indexOf("Madden 2018® Game")||title.indexOf("IPhone®")||title.indexOf("Amazon® Gift Card")||title == "Pizza Gift Card"||title == "iPhone® X"||title == "Starbucks® Gift Card"||title == "Hardrock® Gift Card"||title == "Christmas"||title == "Christmas Visa®"||title.indexOf("Visa® Gift Card")||title == "NFL® Tickets"||title == "Charmin® Toilet Paper"||title == "Walmart® Gift Card"||title == "Papa John's® Gift Card"||title == "Protein Powder"||title == "TheFreeSamplesGuide"||title.indexOf("Target® Gift Card")||title == "Bath & Body Works® Card"||title == "Force Arena® Credits"||title == "Johnsons® Baby Relief Kit"||title == "Gerber® Bath Set"||title == "Uber® Gift Card"||title == "Labor Day Visa® Gift Card")
				// 30 31 75 82 5 118 102 119 187 283 317 318 321 315 397 399 412 410 413 423 422 421 420 419 418 417 416
				// 431 480 479
				{ 
					try //
					{
						var Line = 1;
						switch(Check_Off)
						{ // So Line Se Lay Info
							case "399":case "397":
							Line = 2;
							break;
						}
						switch(Check_Off)
						{ // chọn Yes No đầu rồi mới mail
							case "410":case "412":case "399":
							var Trang_1 = "CODE:"; 
							Trang_1 += "SET !ERRORIGNORE YES" + "\n";
							Trang_1 += "SET !TIMEOUT_TAG 0" + "\n";
							Trang_1 += "TAG POS=1 TYPE=A ATTR=TXT:yes" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=2 TYPE=A ATTR=TXT:yes" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=3 TYPE=A ATTR=TXT:yes" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=1 TYPE=A ATTR=TXT:yes" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=1 TYPE=A ATTR=TXT:yes" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=1 TYPE=A ATTR=TXT:yes" + "\n";
							iimPlay(Trang_1);
							iimPlayCode("WAIT SECONDS=5");
							var Trang_2 = "CODE:";
							Trang_2 += "SET !ERRORIGNORE YES" + "\n";
							Trang_2 += "SET !TIMEOUT_TAG 0" + "\n";
							Trang_2 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
							Trang_2 += "SET !DATASOURCE_LINE "+Line+"\n";
							Trang_2 += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:email-form ATTR=ID:email-address CONTENT={{!COL1}}"+"\n";
							Trang_2 += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email-address CONTENT={{!COL1}}"+"\n";
							Trang_2 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=NAME:email CONTENT={{!COL1}}"+"\n";
							Trang_2 += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:email-form ATTR=ID:submit"+"\n";
							Trang_2 += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=ID:submit"+"\n";
							Trang_2 += "TAG POS=1 TYPE=BUTTON FORM=ID:email-form ATTR=ID:submit-form"+"\n";
							Trang_2 += "TAG POS=1 TYPE=BUTTON FORM=ID:email-form ATTR=ID:form-submit"+"\n";
							Trang_2 += "TAG POS=1 TYPE=SPAN ATTR=ID:submit-text"+"\n";
							Trang_2 += "WAIT SECONDS=15"+"\n";
							iimPlay(Trang_2);
							break;
						}
						switch(Check_Off)
						{ // Dien Mail Done
							case "479":case "480":case "431":case "415":case "416":
							case "417":case "418":case "419":case "420":case "421":case "422":case "423":case "413":
							case "397":case "315":case "321":case "318":case "317":case "187":case "119":case "102":
							case "118":case "5":case "82":case "75":case "31":case "30":case "21":
							var SUBMIT = "CODE:";
							SUBMIT += "SET !ERRORIGNORE YES" + "\n";
							SUBMIT += "SET !TIMEOUT_TAG 0" + "\n";
							SUBMIT += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
							SUBMIT += "SET !DATASOURCE_LINE "+Line+"\n";
							SUBMIT += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:email-form ATTR=ID:email-address CONTENT={{!COL1}}"+"\n";
							SUBMIT += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email-address CONTENT={{!COL1}}"+"\n";
							SUBMIT += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=NAME:email CONTENT={{!COL1}}"+"\n";
							SUBMIT += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:email-form ATTR=ID:submit"+"\n";
							SUBMIT += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=ID:submit"+"\n";
							SUBMIT += "TAG POS=1 TYPE=BUTTON FORM=ID:email-form ATTR=ID:submit-form"+"\n";
							SUBMIT += "TAG POS=1 TYPE=SPAN ATTR=ID:submit-text"+"\n";
							SUBMIT += "WAIT SECONDS=15"+"\n";
							iimPlay(SUBMIT);
							break;
						}
						switch(Check_Off)
						{ // Điền Mai và chọn yes no
							case "0":
							var SUBMIT = "CODE:"; 
							SUBMIT += "SET !ERRORIGNORE YES" + "\n";
							SUBMIT += "SET !TIMEOUT_TAG 0" + "\n";
							SUBMIT += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
							SUBMIT += "SET !DATASOURCE_LINE 1"+"\n";
							SUBMIT += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:form1 ATTR=ID:txt_email CONTENT={{!COL1}}"+"\n";
							SUBMIT += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ID:form1 ATTR=ID:btnEmailSubmit"+"\n";
							SUBMIT += "TAG POS=1 TYPE=A ATTR=TXT:Yes"+"\n";
							SUBMIT += "TAG POS=1 TYPE=A ATTR=TXT:No"+"\n";
							SUBMIT += "WAIT SECONDS=15"+"\n";
							iimPlay(SUBMIT);
							break;
						}
						switch(Check_Off)
						{// Dailybreak có Title đặt biệt
							case "283":
							Dailybreak(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Problem loading page")
				{// Lỗi Mạng F5 lại                                   
					try
					{
						iimPlay(REFRESH_Site);
						F5_Off_sai_dang++;
						iimDisplay("Using Code Off "+Check_Off+" Error network\nrefresh : "+F5_Off_sai_dang);
						if(F5_Off_sai_dang > 5)
						{
							off++;
							break;
						}
					}
					catch(exception){}
				}
				else 
				{// sai dạng bỏ làm con mới 
					iimDisplay("Code Off "+Check_Off+" Khong Trung !");
					off++;
					break;
				}
			}
			else 
			{// Con Neu Site Co Title La Rong
				if(Check_Off == "0")
				{// Neu Site Rong Thi Check Ma Offer
					var Insurance_check = "CODE:";
					Insurance_check += "SET !ERRORIGNORE YES"+" \n";
					Insurance_check += "SET !TIMEOUT_TAG 0"+" \n";
					Insurance_check += "TAG POS=1 TYPE=H2 ATTR=TXT:Join<SP>The<SP>Club! EXTRACT = TXT"+" \n";
					iimPlay(Insurance_check);
					var extract = iimGetExtract();
					if(extract == "Join The Club!")
					{
						Find_Family_Support(File_Mail_info)
						off++;
						break;
					}
				}
				else if(Check_Off == "444"||Check_Off == "445"||Check_Off == "443")
				{// 443 444 445
					var str = window.document.body.textContent;
					if(str.indexOf("DISCOVER HOW")||str.indexOf("Request your month´s")||str.indexOf("Your next trip is on us"))
					{
						var Cilck_Trang_1 = "CODE:";
						Cilck_Trang_1 += "SET !ERRORIGNORE YES" + "\n";
						Cilck_Trang_1 += "SET !TIMEOUT_TAG 0" + "\n";
						Cilck_Trang_1 += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>SECTION>DIV>DIV>A\" BUTTON=0"+"\n";
						Cilck_Trang_1 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Click<SP>here"+"\n";
						Cilck_Trang_1 += "WAIT SECONDS=1"+"\n";
						iimPlay(Cilck_Trang_1);
						var SUBMIT_Trang_2 = "CODE:";
						SUBMIT_Trang_2 += "SET !ERRORIGNORE YES" + "\n";
						SUBMIT_Trang_2 += "SET !TIMEOUT_TAG 0" + "\n";
						SUBMIT_Trang_2 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
						SUBMIT_Trang_2 += "SET !DATASOURCE_LINE 1"+"\n";
						SUBMIT_Trang_2 += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:email-form ATTR=ID:email-address CONTENT={{!COL1}}"+"\n";
						SUBMIT_Trang_2 += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email-address CONTENT={{!COL1}}"+"\n";
						SUBMIT_Trang_2 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=NAME:email CONTENT={{!COL1}}"+"\n";
						SUBMIT_Trang_2 += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:email-form ATTR=ID:submit"+"\n";
						SUBMIT_Trang_2 += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=ID:submit"+"\n";
						SUBMIT_Trang_2 += "TAG POS=1 TYPE=BUTTON FORM=ID:email-form ATTR=ID:submit-form"+"\n";
						SUBMIT_Trang_2 += "TAG POS=1 TYPE=SPAN ATTR=ID:submit-text"+"\n";
						SUBMIT_Trang_2 += "WAIT SECONDS=15"+"\n";
						iimPlay(SUBMIT_Trang_2);
						off++;
						break;
					}
				}
				else if(Check_Off == "3")
				{
					var str = window.document.body.textContent;
					if(str.indexOf("QualityHealth"))
					{
						QualityHealth(File_Mail_info);
						off++;
						break;
					}
				}
				else if(Check_Off == "0")
				{
					var str = window.document.body.textContent;
					if(str.indexOf("Congratulations, you are today's lucky visitor!"))
					{
						iPhone7(File_Mail_info);
						off++;
						break;
					}
				}
				else if(Check_Off == "357")
				{// 357
					switch(Check_Off)
					{
						case "0":
						var National_Quay = "CODE:";
						National_Quay += "SET !ERRORIGNORE YES"+"\n";
						National_Quay += "SET !TIMEOUT_TAG 0"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal01>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q1>SPAN\" BUTTON=0"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q2>SPAN\" BUTTON=0"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q3>SPAN\" BUTTON=0"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q4>SPAN\" BUTTON=0"+"\n";
						National_Quay += "WAIT SECONDS=10"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#v4>TABLE>TBODY>TR:nth-of-type(2)>TD:nth-of-type(2)>A:nth-of-type(2)>DIV\" BUTTON=0"+"\n";
						National_Quay += "WAIT SECONDS=5"+"\n";
						iimPlay(National_Quay);
						break;
					}
					switch(Check_Off)
					{
						case "357":
						var National_Quay = "CODE:";
						National_Quay += "SET !ERRORIGNORE YES"+"\n";
						National_Quay += "SET !TIMEOUT_TAG 0"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal01>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
						National_Quay += "WAIT SECONDS=7"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal02>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
						National_Quay += "WAIT SECONDS=7"+"\n";
						National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal03>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
						iimPlay(National_Quay);
						break;
					}
					iimPlayCode("WAIT SECONDS=1");
					var title = window.document.title;
					if(title == "National Consumer Center")
					{
						National_Consumer_Center(File_Mail_info);
						off++;
						break;
					}
					else if(title == "SurveysandPromotions")
					{
						National_FRAME_1(File_Mail_info);
						off++;
						break;
					}
					else
					{
						off++;
						break;
					}
				}
				else
				{// Neu Check Ma Offer Tren Khong Co Thi F5
					iimPlay(REFRESH_Site);
					F5_site_Rong++;
					iimDisplay("Code Off "+Check_Off+" Error site\nrefresh : "+F5_site_Rong);
					if(F5_site_Rong > 2)
					{
						off++;
						break;
					}
				}
			}
		}
	}
}// Vong Lap Cho Toan Bo Qua Trinh Lam
 
//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\  

function Dailybreak_V2(File_Mail_info)                      // Dailybreak V2
{
	var KS1 = Math.floor((Math.random() * 3) + 1);
	var KS2 = Math.floor((Math.random() * 6) + 3);
	var KS3 = Math.floor((Math.random() * 10) + 6);
	var Ngay = Math.floor((Math.random() * 9) + 1);
	var Thang = Math.floor((Math.random() * 9) + 1);
	var Nam = Math.floor((Math.random() * (1998 - 2004 + 1)) + 2004);
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Pass  = Tao_Pass();var Line = 1;
	var Error_capcha = 0;var Failed_Recaptcha = 0;var Unknown_error = 0;
	// Lay info Khac neu Lam Off Giong nhau
	switch(Check_Off)
	{
		case "0":
		Line = 2;
		break;
	}
	//
	while(true)
	{
		iimPlayCode("TAG POS=1 TYPE=BUTTON ATTR=TXT:CREATE<SP>A<SP>NEW<SP>ACCOUNT");
		iimPlayCode("WAIT SECONDS=5");
		var Click_Capcha_1 = "CODE:";
		Click_Capcha_1 += "SET !ERRORIGNORE YES" + "\n";
		Click_Capcha_1 += "SET !TIMEOUT_TAG 0" + "\n";
		Click_Capcha_1 += "FRAME F=1" + "\n";
		Click_Capcha_1 += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV:nth-of-type(5)\" BUTTON=0" + "\n";
		iimPlay(Click_Capcha_1);
		var Click_Capcha_2 = "CODE:";
		Click_Capcha_2 += "SET !ERRORIGNORE YES" + "\n";
		Click_Capcha_2 += "SET !TIMEOUT_TAG 0" + "\n";
		Click_Capcha_2 += "FRAME F=2" + "\n";
		Click_Capcha_2 += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV:nth-of-type(5)\" BUTTON=0" + "\n";
		iimPlay(Click_Capcha_2);
		var Click_Capcha_3 = "CODE:";
		Click_Capcha_3 += "SET !ERRORIGNORE YES" + "\n";
		Click_Capcha_3 += "SET !TIMEOUT_TAG 0" + "\n";
		Click_Capcha_3 += "FRAME F=3" + "\n";
		Click_Capcha_3 += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV:nth-of-type(5)\" BUTTON=0" + "\n";
		iimPlay(Click_Capcha_3);
		iimPlayCode("WAIT SECONDS=10");
		//
		var Dailybreak_INFO = "CODE:"; 
		Dailybreak_INFO += "SET !ERRORIGNORE YES" + "\n";
		Dailybreak_INFO += "SET !TIMEOUT_TAG 0" + "\n";
		Dailybreak_INFO += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
		Dailybreak_INFO += "SET !DATASOURCE_LINE "+Line+ "\n";
		Dailybreak_INFO += "TAG POS=2 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=* CONTENT={{!COL1}}" + "\n";
		Dailybreak_INFO += "SET !ENCRYPTION NO" + "\n";
		Dailybreak_INFO += "TAG POS=2 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=* CONTENT="+Pass+ "\n";
		Dailybreak_INFO += "TAG POS=2 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=NAME:gender" + "\n";
		Dailybreak_INFO += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayMonth CONTENT=%"+Ngay+ "\n";
		Dailybreak_INFO += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayDay CONTENT=%"+Thang+ "\n";
		Dailybreak_INFO += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayYear CONTENT=%"+Nam+ "\n";
		Dailybreak_INFO += "TAG POS="+KS1+" TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
		Dailybreak_INFO += "TAG POS="+KS2+" TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
		Dailybreak_INFO += "TAG POS="+KS3+" TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
		Dailybreak_INFO += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Sign<SP>Up" + "\n";	
		Dailybreak_INFO += "WAIT SECONDS=10" + "\n";
		iimPlay(Dailybreak_INFO);
		// check lỗi mail hoặc capcha
		var check_Error = "CODE:";
		check_Error += "SET !ERRORIGNORE YES" + "\n";
		check_Error += "SET !TIMEOUT_TAG 6" + "\n";
		check_Error += "TAG POS=2 TYPE=DIV ATTR=CLASS:errors-display  EXTRACT = TXT" + "\n";
		iimPlay(check_Error);
		var extract =  iimGetExtract();
		if(extract == "User already exists.")
		{// check Neu Mail Dung Roi
			break;
		}
		else if(extract == "Failed Recaptcha")
		{// Check Error Capcha
			loginCookie();
			Failed_Recaptcha++;
			iimPlay(REFRESH_Site);
			iimDisplay("Error Failed Recaptcha");
			if(Failed_Recaptcha > 2)
			{
				break;
			}
		}
		else
		{// Neu Ok Thi Chay KS
			switch(Check_Off)
			{// KS loại 1
				case "376":case "363":case "343":case "341":
				case "297":case "129":case "195":case "277":case "258":case "251":case "193":case "178":case "182":
				case "177":case "173":case "157":case "127":case "104":case "79":case "77":case "8":case "67":
				case "175":case "159":case "12":case "66":case "27":case "20":case "11":case "57":case "47":
				var Dailybreak_KS1 = "CODE:";
				Dailybreak_KS1 += "SET !ERRORIGNORE YES"+"\n";
				Dailybreak_KS1 += "SET !TIMEOUT_TAG 0 "+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=0"+"\n";
				Dailybreak_KS1 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0'+" \n";
				Dailybreak_KS1 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0 '+" \n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON:nth-of-type(3)\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=3"+"\n"; // click net 
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n"; // click KS
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=3"+"\n"; // click skip
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n"; // click net dang khac
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n"; // click buoc cuoi xem video
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>SPAN>SPAN\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>SPAN>SPAN\" BUTTON=0"+"\n";
				Dailybreak_KS1 += "WAIT SECONDS=10"+"\n";
				Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#modals>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
				iimPlay(Dailybreak_KS1);
				break;					
			}
			switch(Check_Off)
			{// KS loại 2
				case "283":
				var Dailybreak_KS2 = "CODE:";
				Dailybreak_KS2 += "SET !ERRORIGNORE YES"+"\n";
				Dailybreak_KS2 += "SET !TIMEOUT_TAG 0 "+"\n";
				Dailybreak_KS2 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=0"+"\n";
				Dailybreak_KS2 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0'+" \n";
				Dailybreak_KS2 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0 '+" \n";
				Dailybreak_KS2 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:50"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:6<SP>feet"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS2 += "TAG POS=2 TYPE=BUTTON ATTR=TXT:Next"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:2<SP>Days"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS2 += "TAG POS=3 TYPE=BUTTON ATTR=TXT:Next"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS2 += "TAG POS=4 TYPE=BUTTON ATTR=TXT:Next"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=1"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
				Dailybreak_KS2 += "WAIT SECONDS=10"+"\n";
				Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Start"+"\n";
				iimPlay(Dailybreak_KS2);
				break;
			}
			switch(Check_Off)
			{// KS loại 3
				case "361":
				iimPlay(REFRESH_Site);
				var Dailybreak_KS3 = "CODE:";
				Dailybreak_KS3 += "SET !ERRORIGNORE YES"+"\n";
				Dailybreak_KS3 += "SET !TIMEOUT_TAG 0 "+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=0"+"\n";
				Dailybreak_KS3 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0'+" \n";
				Dailybreak_KS3 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0 '+" \n";
				Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";		
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
				Dailybreak_KS3 += "WAIT SECONDS=10"+"\n";
				Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#modals>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
				iimPlay(Dailybreak_KS3);
				break;
			}
			iimPlayCode("WAIT SECONDS=20");
			break;
		}
	}
}
function Dailybreak(File_Mail_info)                      // Dailybreak
{
	var KS1 = Math.floor((Math.random() * 3) + 1);
	var KS2 = Math.floor((Math.random() * 6) + 3);
	var KS3 = Math.floor((Math.random() * 10) + 6);
	var Ngay = Math.floor((Math.random() * 9) + 1);
	var Thang = Math.floor((Math.random() * 9) + 1);
	var Nam = Math.floor((Math.random() * (1998 - 2004 + 1)) + 2004);
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Pass  = Tao_Pass();var Line = 1;
	var Error_capcha = 0;var Failed_Recaptcha = 0;var Unknown_error = 0;
	// Lay info Khac neu Lam Off Giong nhau
	switch(Check_Off)
	{
		case "0":
		Line = 2;
		break;
	}
	//
	while(true)
	{
		iimPlayCode("TAG POS=1 TYPE=BUTTON ATTR=TXT:CREATE<SP>A<SP>NEW<SP>ACCOUNT");
		var capcha = check_capcha();
		if(capcha == true)
		{
			var Dailybreak_INFO = "CODE:"; 
			Dailybreak_INFO += "SET !ERRORIGNORE YES" + "\n";
			Dailybreak_INFO += "SET !TIMEOUT_TAG 100" + "\n";
			Dailybreak_INFO += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
			Dailybreak_INFO += "SET !TIMEOUT_TAG 0" + "\n";
			Dailybreak_INFO += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
			Dailybreak_INFO += "SET !DATASOURCE_LINE "+Line+ "\n";
			Dailybreak_INFO += "TAG POS=2 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=* CONTENT={{!COL1}}" + "\n";
			Dailybreak_INFO += "SET !ENCRYPTION NO" + "\n";
			Dailybreak_INFO += "TAG POS=2 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=* CONTENT="+Pass+ "\n";
			Dailybreak_INFO += "TAG POS=2 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=NAME:gender" + "\n";
			Dailybreak_INFO += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayMonth CONTENT=%"+Ngay+ "\n";
			Dailybreak_INFO += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayDay CONTENT=%"+Thang+ "\n";
			Dailybreak_INFO += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayYear CONTENT=%"+Nam+ "\n";
			Dailybreak_INFO += "TAG POS="+KS1+" TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
			Dailybreak_INFO += "TAG POS="+KS2+" TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
			Dailybreak_INFO += "TAG POS="+KS3+" TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
			Dailybreak_INFO += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Sign<SP>Up" + "\n";	
			Dailybreak_INFO += "WAIT SECONDS=10" + "\n";
			iimPlay(Dailybreak_INFO);
			// check lỗi mail hoặc capcha
			var check_Error = "CODE:";
			check_Error += "SET !ERRORIGNORE YES" + "\n";
			check_Error += "SET !TIMEOUT_TAG 6" + "\n";
			check_Error += "TAG POS=2 TYPE=DIV ATTR=CLASS:errors-display  EXTRACT = TXT" + "\n";
			iimPlay(check_Error);
			var extract =  iimGetExtract();
			if(extract == "User already exists.")
			{// check Neu Mail Dung Roi
				break;
			}
			else if(extract == "Failed Recaptcha")
			{// Check Error Capcha
				Failed_Recaptcha++;
				iimPlay(REFRESH_Site);
				iimDisplay("Error Failed Recaptcha");
				if(Failed_Recaptcha > 1)
				{
					break;
				}
			}
			else
			{// Neu Ok Thi Chay KS
				switch(Check_Off)
				{// KS loại 1
					case "471":case "376":case "363":case "343":case "341":case "391":
					case "297":case "129":case "195":case "277":case "258":case "251":case "193":case "178":case "182":
					case "177":case "173":case "157":case "127":case "104":case "79":case "77":case "8":case "67":
					case "175":case "159":case "12":case "66":case "27":case "20":case "11":case "57":case "47":
					var Dailybreak_KS1 = "CODE:";
					Dailybreak_KS1 += "SET !ERRORIGNORE YES"+"\n";
					Dailybreak_KS1 += "SET !TIMEOUT_TAG 0 "+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=0"+"\n";
					Dailybreak_KS1 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS1 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0 '+" \n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON:nth-of-type(3)\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n"; // click net 
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n"; // click KS
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n"; // click skip
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n"; // click net dang khac
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n"; // click buoc cuoi xem video
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>SPAN>SPAN\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>SPAN>SPAN\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=10"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#modals>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
					iimPlay(Dailybreak_KS1);
					break;					
				}
				switch(Check_Off)
				{// KS loại 2
					case "283":
					var Dailybreak_KS2 = "CODE:";
					Dailybreak_KS2 += "SET !ERRORIGNORE YES"+"\n";
					Dailybreak_KS2 += "SET !TIMEOUT_TAG 0 "+"\n";
					Dailybreak_KS2 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=0"+"\n";
					Dailybreak_KS2 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS2 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0 '+" \n";
					Dailybreak_KS2 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:50"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:6<SP>feet"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS2 += "TAG POS=2 TYPE=BUTTON ATTR=TXT:Next"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:2<SP>Days"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS2 += "TAG POS=3 TYPE=BUTTON ATTR=TXT:Next"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS2 += "TAG POS=4 TYPE=BUTTON ATTR=TXT:Next"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=A ATTR=TXT:Skip"+"\n";
					Dailybreak_KS2 += "WAIT SECONDS=10"+"\n";
					Dailybreak_KS2 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Start"+"\n";
					iimPlay(Dailybreak_KS2);
					break;
				}
				switch(Check_Off)
				{// KS loại 3
					case "361":
					iimPlay(REFRESH_Site);
					var Dailybreak_KS3 = "CODE:";
					Dailybreak_KS3 += "SET !ERRORIGNORE YES"+"\n";
					Dailybreak_KS3 += "SET !TIMEOUT_TAG 0 "+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=0"+"\n";
					Dailybreak_KS3 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS3 += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0 '+" \n";
					Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";		
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS3 += "WAIT SECONDS=10"+"\n";
					Dailybreak_KS3 += "EVENT TYPE=CLICK SELECTOR=\"#modals>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
					iimPlay(Dailybreak_KS3);
					break;
				}
				iimPlayCode("WAIT SECONDS=20");
				break;
			}
		}
		else
		{// Error Khong Hien Capcha
			Error_capcha++;
			iimPlay(REFRESH_Site);
			iimDisplay("Error Recaptcha");
			if(Error_capcha > 2)
			{
				break;
			}
		}
	}
}
function RewardBee_V2(File_Mail_info)                     // RewardBee_V2
{
	var C0 = 0;var C1 = 0;var C2 = 0;var C3 = 0;var C4 = 0;var C5 = 0;var C6 = 0;var C7 = 0;var C8 = 0;var C9 = 0;var C10 = 0;
	var Error_Off = 0;var Line = 1;
	var Pass = Tao_Pass();
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Phieu_Mua_Hang1 = Math.floor((Math.random() * 5) + 1);
	var Phieu_Mua_Hang2 = Math.floor((Math.random() * (9 - 6 + 1)) + 6);
	var Phieu_Mua_Hang3 = Math.floor((Math.random() * (14 - 11 + 1)) + 11);
	// lay inf khac neu lam off giong nhau
	switch(Check_Off) 
	{
		case "0":
		Line = 2;
		break;
	}
	while(true)
	{
		var SL_Chon_KS = 0;iimDisplay("Dang Chay Off Ma La : "+Check_Off+"\nSo Off Da Lam : "+off);
		switch(Check_Off)
		{// chọn Phiếu Mua hàng loại 10$ và 30$
			case "145":case "84":case "86":case "109":case "17":case "22":case "39":
			var selected_10$ = "CODE:";
			selected_10$ += "SET !ERRORIGNORE YES" + "\n";
			selected_10$ += "SET !TIMEOUT_TAG 0" + "\n";
			selected_10$ += "TAG POS="+Phieu_Mua_Hang1+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
			iimPlay(selected_10$);
			break;
			//
			default:
			var selected_30$ = "CODE:";
			selected_30$ += "SET !ERRORIGNORE YES" + "\n";
			selected_30$ += "SET !TIMEOUT_TAG 0" + "\n";
			selected_30$ += "TAG POS="+Phieu_Mua_Hang1+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
			selected_30$ += "TAG POS="+Phieu_Mua_Hang2+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
			selected_30$ += "TAG POS="+Phieu_Mua_Hang3+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
			iimPlay(selected_30$);
			break;
		}
		switch(Check_Off)
		{// Phân loại câu hỏi RewardBee
			// RewardBee
			case "78":
			C0 = 3;C5 = 4;
			C1 = 3;C6 = 3;
			C2 = 5;C7 = 7;
			C3 = 8;C8 = 3;
			C4 = 3;C9 = 3;
			break;
			// RewardBee (Game Night)
			case "387":case "39":case "179":case "86":case "109":
			C0 = 7;C5 = 5;
			C1 = 3;C6 = 6;
			C2 = 5;C7 = 3;
			C3 = 3;C8 = 7;
			C4 = 3;C9 = 2;C10 = 6;
			break;
			//RewardBee -(key) + TV
			case "145":case "123":case "22":case "76":
			C0 = 8;C5 = 3;
			C1 = 5;C6 = 7;
			C2 = 6;C7 = 3;
			C3 = 7;C8 = 7;
			C4 = 4;C9 = 2;
			break;
			// RewardBee - Love
			case "84":
			C0 = 6;C5 = 8;
			C1 = 11;C6 = 7;
			C2 = 4;C7 = 3;
			C3 = 6;C8 = 3;
			C4 = 4;C9 = 2;
			break;
			case "241":case "239":case "25":case "180":
			C0 = 8;C5 = 3;
			C1 = 5;C6 = 7;
			C2 = 6;C7 = 3;
			C3 = 7;C8 = 7;
			C4 = 4;
			break;
		}
		while(true)
		{//Chạy KS 2 Lần Để chánh tình Trạng ko click được ô
			var cau_0 = Math.floor((Math.random() * C0) + 1);
			var cau_1 = Math.floor((Math.random() * C1) + 1);
			var cau_2 = Math.floor((Math.random() * C2) + 1);
			var cau_3 = Math.floor((Math.random() * C3) + 1);
			var cau_4 = Math.floor((Math.random() * C4) + 1);
			var cau_5 = Math.floor((Math.random() * C5) + 1);
			var cau_6 = Math.floor((Math.random() * C6) + 1);
			var cau_7 = Math.floor((Math.random() * C7) + 1);
			var cau_8 = Math.floor((Math.random() * C8) + 1);
			var cau_9 = Math.floor((Math.random() * C9) + 1);
			var cau_10 = Math.floor((Math.random() * C10) + 1);
			if(SL_Chon_KS > 2)
			{
				break;
			}
			SL_Chon_KS++;
			var RewardBee_KS = "CODE:";
			RewardBee_KS += "SET !ERRORIGNORE YES" + "\n";
			RewardBee_KS += "SET !TIMEOUT_TAG 0" + "\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_0>DIV:nth-of-type("+cau_0+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_1>DIV:nth-of-type("+cau_1+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_2>DIV:nth-of-type("+cau_2+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_3>DIV:nth-of-type("+cau_3+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_4>DIV:nth-of-type("+cau_4+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_5>DIV:nth-of-type("+cau_5+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_6>DIV:nth-of-type("+cau_6+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_7>DIV:nth-of-type("+cau_7+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_8>DIV:nth-of-type("+cau_8+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_9>DIV:nth-of-type("+cau_9+")>LABEL\" BUTTON=0"+"\n";
			RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_10>DIV:nth-of-type("+cau_10+")>LABEL\" BUTTON=0"+"\n";
			// click cố định câu 9 
			RewardBee_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:frmSurveyBee ATTR=ID:d42404b2-23e0-e711-b60d-0e4c37f58098"+"\n";
			iimPlay(RewardBee_KS);
		}
		var Click_Capcha_1 = "CODE:";
		Click_Capcha_1 += "SET !ERRORIGNORE YES" + "\n";
		Click_Capcha_1 += "SET !TIMEOUT_TAG 0" + "\n";
		Click_Capcha_1 += "FRAME F=1" + "\n";
		Click_Capcha_1 += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV:nth-of-type(5)\" BUTTON=0" + "\n";
		iimPlay(Click_Capcha_1);
		var Click_Capcha_2 = "CODE:";
		Click_Capcha_2 += "SET !ERRORIGNORE YES" + "\n";
		Click_Capcha_2 += "SET !TIMEOUT_TAG 0" + "\n";
		Click_Capcha_2 += "FRAME F=2" + "\n";
		Click_Capcha_2 += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV:nth-of-type(5)\" BUTTON=0" + "\n";
		iimPlay(Click_Capcha_2);
		var Click_Capcha_3 = "CODE:";
		Click_Capcha_3 += "SET !ERRORIGNORE YES" + "\n";
		Click_Capcha_3 += "SET !TIMEOUT_TAG 0" + "\n";
		Click_Capcha_3 += "FRAME F=3" + "\n";
		Click_Capcha_3 += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV:nth-of-type(5)\" BUTTON=0" + "\n";
		iimPlay(Click_Capcha_3);
		iimPlayCode("WAIT SECONDS=10");
		var RewardBee = "CODE:";
		RewardBee += "SET !ERRORIGNORE YES" + "\n";
		RewardBee += "SET !TIMEOUT_TAG 0" + "\n";
		// RewardBee += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
		// RewardBee += "SET !TIMEOUT_TAG 0" + "\n";
		RewardBee += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
		RewardBee += "SET !DATASOURCE_LINE "+Line+"\n";
		RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custEmail CONTENT={{!COL1}}"+"\n";
		RewardBee += "SET !ENCRYPTION NO" + "\n";
		RewardBee += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:frmSurveyBee ATTR=ID:sb-custPwd CONTENT="+Pass+"\n";
		RewardBee += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:frmSurveyBee ATTR=ID:sb-custPwdCnfrm CONTENT="+Pass+"\n";
		// Điền info
		RewardBee += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
		RewardBee += "SET !DATASOURCE_LINE "+Line+"\n";
		RewardBee += "SET !DATASOURCE_COLUMNS 5"+"\n";
		RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custAddress1 CONTENT={{!COL2}}"+"\n";
		RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custCity CONTENT={{!COL3}}"+"\n";
		RewardBee += "TAG POS=1 TYPE=SELECT FORM=ID:frmSurveyBee ATTR=ID:sb-custStateProvince CONTENT=%{{!COL4}}"+"\n";
		RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custPostalCode CONTENT={{!COL5}}"+"\n";
		RewardBee += "SET !DATASOURCE Last_First.txt"+"\n";
		RewardBee += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
		RewardBee += "SET !DATASOURCE_COLUMNS 2"+"\n";
		RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custName CONTENT={{!COL1}}"+"\n";
		RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=ID:sb-confRwd"+"\n";
		RewardBee += "SET !TIMEOUT_TAG 10" + "\n";
		RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=TXT:Click<SP>to<SP>keep<SP>original"+"\n";
		RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=ID:sb-confRwd"+"\n";
		// RewardBee += "WAIT SECONDS=30"+"\n";
		iimPlay(RewardBee);
		iimPlayCode("WAIT SECONDS=15");
		var title = window.document.title;
		if(title == "Confirmation")
		{
			iimPlayCode("WAIT SECONDS=15");
			break;
		}
		else
		{
			Error_Off++;
			iimPlay(REFRESH_Site);
			iimDisplay("Error Offers");
			iimPlayCode("WAIT SECONDS=10");
			if(Error_Off > 2)
			{
				break;
			}
		}
	}
}
function RewardBee(File_Mail_info)                     // RewardBee
{
	var C0 = 0;var C1 = 0;var C2 = 0;var C3 = 0;var C4 = 0;var C5 = 0;var C6 = 0;var C7 = 0;var C8 = 0;var C9 = 0;var C10 = 0;
	var Error_Capcha = 0;var Error_Off = 0;var Line = 1;
	var Pass = Tao_Pass();
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Phieu_Mua_Hang1 = Math.floor((Math.random() * 5) + 1);
	var Phieu_Mua_Hang2 = Math.floor((Math.random() * (9 - 6 + 1)) + 6);
	var Phieu_Mua_Hang3 = Math.floor((Math.random() * (14 - 11 + 1)) + 11);
	// lay inf khac neu lam off giong nhau
	switch(Check_Off) 
	{
		case "0":
		Line = 2;
		break;
	}
	while(true)
	{
		var SL_Chon_KS = 0;iimDisplay("Dang Chay Off Ma La : "+Check_Off+"\nSo Off Da Lam : "+off);
		var capcha = check_capcha();
		if(capcha == true)
		{
			switch(Check_Off)
			{// chọn Phiếu Mua hàng loại 10$ và 30$
 				case "145":case "84":case "86":case "109":case "17":case "22":case "39":
				var selected_10$ = "CODE:";
				selected_10$ += "SET !ERRORIGNORE YES" + "\n";
				selected_10$ += "SET !TIMEOUT_TAG 0" + "\n";
				selected_10$ += "TAG POS="+Phieu_Mua_Hang1+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
				iimPlay(selected_10$);
				break;
				//
				default:
				var selected_30$ = "CODE:";
				selected_30$ += "SET !ERRORIGNORE YES" + "\n";
				selected_30$ += "SET !TIMEOUT_TAG 0" + "\n";
				selected_30$ += "TAG POS="+Phieu_Mua_Hang1+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
				selected_30$ += "TAG POS="+Phieu_Mua_Hang2+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
				selected_30$ += "TAG POS="+Phieu_Mua_Hang3+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
				iimPlay(selected_30$);
				break;
			}
			switch(Check_Off)
			{// Phân loại câu hỏi RewardBee
				// RewardBee
				case "78":
				C0 = 3;C5 = 4;
				C1 = 3;C6 = 3;
				C2 = 5;C7 = 7;
				C3 = 8;C8 = 3;
				C4 = 3;C9 = 3;
				break;
				// RewardBee (Game Night)
				case "387":case "39":case "179":case "86":case "109":
				C0 = 7;C5 = 5;
				C1 = 3;C6 = 6;
				C2 = 5;C7 = 3;
				C3 = 3;C8 = 7;
				C4 = 3;C9 = 2;C10 = 6;
				break;
				// RewardBee Football
				case "442":case "459":
				C0 = 4;C5 = 3;
				C1 = 5;C6 = 3;
				C2 = 8;C7 = 7;
				C3 = 3;C8 = 3;
				C4 = 5;C9 = 3;C10 = 2;
				break;
				//RewardBee -(key) + TV
				case "145":case "123":case "22":case "76":
				C0 = 8;C5 = 3;
				C1 = 5;C6 = 7;
				C2 = 6;C7 = 3;
				C3 = 7;C8 = 7;
				C4 = 4;C9 = 2;
				break;
				// RewardBee - Love
				case "84":
				C0 = 6;C5 = 8;
				C1 = 11;C6 = 7;
				C2 = 4;C7 = 3;
				C3 = 6;C8 = 3;
				C4 = 4;C9 = 2;
				break;
				case "241":case "239":case "25":case "180":
				C0 = 8;C5 = 3;
				C1 = 5;C6 = 7;
				C2 = 6;C7 = 3;
				C3 = 7;C8 = 7;
				C4 = 4;
				break;
			}
			while(true)
			{//Chạy KS 2 Lần Để chánh tình Trạng ko click được ô
				var cau_0 = Math.floor((Math.random() * C0) + 1);
				var cau_1 = Math.floor((Math.random() * C1) + 1);
				var cau_2 = Math.floor((Math.random() * C2) + 1);
				var cau_3 = Math.floor((Math.random() * C3) + 1);
				var cau_4 = Math.floor((Math.random() * C4) + 1);
				var cau_5 = Math.floor((Math.random() * C5) + 1);
				var cau_6 = Math.floor((Math.random() * C6) + 1);
				var cau_7 = Math.floor((Math.random() * C7) + 1);
				var cau_8 = Math.floor((Math.random() * C8) + 1);
				var cau_9 = Math.floor((Math.random() * C9) + 1);
				var cau_10 = Math.floor((Math.random() * C10) + 1);
				if(SL_Chon_KS > 2)
				{
					break;
				}
				SL_Chon_KS++;
				var RewardBee_KS = "CODE:";
				RewardBee_KS += "SET !ERRORIGNORE YES" + "\n";
				RewardBee_KS += "SET !TIMEOUT_TAG 0" + "\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_0>DIV:nth-of-type("+cau_0+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_1>DIV:nth-of-type("+cau_1+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_2>DIV:nth-of-type("+cau_2+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_3>DIV:nth-of-type("+cau_3+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_4>DIV:nth-of-type("+cau_4+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_5>DIV:nth-of-type("+cau_5+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_6>DIV:nth-of-type("+cau_6+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_7>DIV:nth-of-type("+cau_7+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_8>DIV:nth-of-type("+cau_8+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_9>DIV:nth-of-type("+cau_9+")>LABEL\" BUTTON=0"+"\n";
				RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_10>DIV:nth-of-type("+cau_10+")>LABEL\" BUTTON=0"+"\n";
				// click cố định câu 9 
				RewardBee_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:frmSurveyBee ATTR=ID:d42404b2-23e0-e711-b60d-0e4c37f58098"+"\n";
				iimPlay(RewardBee_KS);
			}
			// Check Capcha Và Điền Info
			var RewardBee = "CODE:";
			RewardBee += "SET !ERRORIGNORE YES" + "\n";
			RewardBee += "SET !TIMEOUT_TAG 80" + "\n";
			RewardBee += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
			RewardBee += "SET !TIMEOUT_TAG 0" + "\n";
			RewardBee += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
			RewardBee += "SET !DATASOURCE_LINE "+Line+"\n";
			RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custEmail CONTENT={{!COL1}}"+"\n";
			RewardBee += "SET !ENCRYPTION NO" + "\n";
			RewardBee += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:frmSurveyBee ATTR=ID:sb-custPwd CONTENT="+Pass+"\n";
			RewardBee += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:frmSurveyBee ATTR=ID:sb-custPwdCnfrm CONTENT="+Pass+"\n";
			// Điền info
			RewardBee += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
			RewardBee += "SET !DATASOURCE_LINE "+Line+"\n";
			RewardBee += "SET !DATASOURCE_COLUMNS 5"+"\n";
			RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custAddress1 CONTENT={{!COL2}}"+"\n";
			RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custCity CONTENT={{!COL3}}"+"\n";
			RewardBee += "TAG POS=1 TYPE=SELECT FORM=ID:frmSurveyBee ATTR=ID:sb-custStateProvince CONTENT=%{{!COL4}}"+"\n";
			RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custPostalCode CONTENT={{!COL5}}"+"\n";
			RewardBee += "SET !DATASOURCE Last_First.txt"+"\n";
			RewardBee += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
			RewardBee += "SET !DATASOURCE_COLUMNS 2"+"\n";
			RewardBee += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frmSurveyBee ATTR=ID:sb-custName CONTENT={{!COL1}}"+"\n";
			RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=ID:sb-confRwd"+"\n";
			RewardBee += "SET !TIMEOUT_TAG 10" + "\n";
			RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=TXT:Click<SP>to<SP>keep<SP>original"+"\n";
			RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=ID:sb-confRwd"+"\n";
			// RewardBee += "WAIT SECONDS=30"+"\n";
			iimPlay(RewardBee);
			iimPlayCode("WAIT SECONDS=15");
			var title = window.document.title;
			if(title == "Confirmation")
			{
				iimPlayCode("WAIT SECONDS=15");
				break;
			}
			else
			{
				Error_Off++;
				iimPlay(REFRESH_Site);
				iimDisplay("Error Offers");
				if(Error_Off > 1)
				{
					break;
				}
			}
		}
		else
		{
			Error_Capcha++;
			iimPlay(REFRESH_Site);
			iimDisplay("Error Not captcha");
			if(Error_Capcha > 2)
			{
				break;
			}
		}
	}
}
function TopSweeps(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975  + 1)) + 1975 );
	var TopSweeps = "CODE:";
	TopSweeps += "SET !ERRORIGNORE YES"+"\n";
	TopSweeps += "SET !TIMEOUT_TAG 0"+"\n";
	TopSweeps += "SET !DATASOURCE Last_First.txt"+"\n";
	TopSweeps += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	TopSweeps += "SET !DATASOURCE_COLUMNS 2  "+"\n"; // 
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-8589-first-name\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-8589-first-name" CHARS="{{!COL1}}"'+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-8589-last-name\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-8589-last-name" CHARS="{{!COL2}}"'+"\n";
	
	//
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-first-name\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-first-name" CHARS="{{!COL1}}"'+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-last-name\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-last-name" CHARS="{{!COL2}}"'+"\n";
	
	TopSweeps += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	TopSweeps += "SET !DATASOURCE_LINE 1"+"\n";
	TopSweeps += "SET !DATASOURCE_COLUMNS 1"+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-8626-default\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-8626-default" CHARS="{{!COL1}}"'+"\n";
	//
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-9af4f79d-c77e-4b69-a975-2b46df37610d-default\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-9af4f79d-c77e-4b69-a975-2b46df37610d-default" CHARS="{{!COL1}}"'+"\n";
	//
	TopSweeps += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-*-month CONTENT=%"+Random_Ngay+"\n";
	TopSweeps += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-*-day CONTENT=%"+Random_Thang+"\n";
	TopSweeps += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-*-year CONTENT=%"+Random_Nam+"\n";
	TopSweeps += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-8648-default CONTENT=%8186"+"\n";
	TopSweeps += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-aed8d9b3-04f0-42fa-9d8f-2ae196b0aa66-default CONTENT=%460b2f64-e325-4aac-b531-02c3dc4552ca"+"\n";
	//
	TopSweeps += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	TopSweeps += "SET !DATASOURCE_LINE 1"+"\n";
	TopSweeps += "SET !DATASOURCE_COLUMNS 5 "+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-8715-default\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-8715-default" CHARS="{{!COL1}}"'+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-8725-address-1\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-8725-address-1" CHARS="{{!COL2}}"'+"\n";
	TopSweeps += 'EVENT TYPE=CLICK SELECTOR="#i-input-8725-city" BUTTON=0'+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-8725-city" CHARS="{{!COL3}}"'+"\n";
	TopSweeps += 'EVENT TYPE=CLICK SELECTOR="#i-input-8725-zip" BUTTON=0'+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-8725-zip" CHARS="{{!COL5}}"'+"\n";
	TopSweeps += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-8725-state CONTENT=%{{!COL4}}"+"\n";
	//
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-e2391395-ae36-45cd-ab79-f1330f00c4ff-default\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-e2391395-ae36-45cd-ab79-f1330f00c4ff-default" CHARS="{{!COL1}}"'+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-address-1\" BUTTON=0"+"\n";
	TopSweeps += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-address-1" CHARS="{{!COL2}}"'+"\n";
	//
	TopSweeps += "WAIT SECONDS = 3"+"\n";
	TopSweeps += "EVENT TYPE=MOUSEDOWN SELECTOR=\"HTML>BODY>DIV:nth-of-type(8)>DIV\" BUTTON=0"+"\n";
	TopSweeps += 'EVENT TYPE=MOUSEUP POINT="(776,549)"'+"\n";
	//
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-8483-default>DIV>DIV>LABEL>SPAN>SPAN\" BUTTON=0"+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-8430-default>DIV>DIV>LABEL>SPAN>SPAN\" BUTTON=0"+"\n";
	//
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-40c1bddc-4cce-4531-8b13-f2f7d2bfa634-default>DIV>DIV>LABEL>SPAN>SPAN\" BUTTON=0"+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-12aa73fb-141f-4350-97ec-43b8c904df56-default>DIV>DIV>LABEL>SPAN>SPAN\" BUTTON=0"+"\n";
	TopSweeps += "WAIT SECONDS = 3"+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-780faa1b-2c0c-4a66-8634-4effb920724c\" BUTTON=0"+"\n";
	TopSweeps += "EVENT TYPE=CLICK SELECTOR=\"#i-8855\" BUTTON=0"+"\n";
	//
	TopSweeps += "WAIT SECONDS = 15"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-9847d42d-6d77-4674-8fa8-12a8dd1a0fab"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-81c23044-b2c3-49d0-bb05-c1dfbd203d4e"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-565bbd4b-1101-4b30-86e2-70d6f42a46b7"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-e3795fd2-d234-45bc-9ad8-9d59bff9b9a9"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n"; 
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-872d907c-c838-48d4-8122-cd3de807a480"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-8d0271d2-50fb-4c65-8d0a-28089919e54e"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-84edfbe7-01ad-41a9-9765-37258ebcdded"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-bc1ee22f-db43-4962-9654-f6b4a0edae01"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-377cc6c1-bf1e-42dd-90a4-38ea8ac5b69e"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-2b310403-3cec-4f26-92c0-397446b30812"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:OTHER"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-f60ae0bd-9156-4dc6-994e-241608333f80"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-0d5cc57e-5605-4dfd-9e47-e2fe5ce0c6da"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-a8e126e1-5601-42bf-a92c-bd9bebc5c313"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-2bef3cd2-70ed-46b9-97db-33b9893d95de"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Medicare"+"\n";
	// TopSweeps += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:i-37b25335-1b61-4a0f-bc74-7eb9f9f64613"+"\n";
	TopSweeps += "WAIT SECONDS=2"+"\n";
	TopSweeps += "TAG POS=2 TYPE=SPAN ATTR=TXT:"+"\n";
	TopSweeps += "TAG POS=1 TYPE=IMG ATTR=SRC:https://djk97zng6lbya.cloudfront.net/2016/08/19/01/09/36/39050a90-a493-4b1c-ae22-e3293075378c.png"+"\n";
	TopSweeps += "WAIT SECONDS=3"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8907"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8780"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8787"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8889"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8754"+"\n";
	TopSweeps += "WAIT SECONDS=3"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8939"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8922"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8830"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8784"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8886"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-8933"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-25712cd0-e968-4f3f-b9d6-26e80df218cc"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-c4b0b753-ae01-4e65-b69e-609f2306cb69"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=IMG ATTR=SRC:https://djk97zng6lbya.cloudfront.net/2018/01/15/19/44/12/3eb32725-c261-4a12-bfb6-d5386470ad05.png"+"\n";
	TopSweeps += "WAIT SECONDS=0.5"+"\n";
	TopSweeps += "TAG POS=1 TYPE=IMG ATTR=SRC:https://djk97zng6lbya.cloudfront.net/2018/01/15/19/42/58/dd893024-fe99-48c9-b081-473ac91d97ab.png"+"\n";
	TopSweeps += "WAIT SECONDS=15"+"\n";
	iimPlay(TopSweeps);
}
function QualityHealth(File_Mail_info)
{
	var Thang = Math.floor((Math.random() * 9) + 1);
	var Nam = Math.floor((Math.random() * (1965 - 1960 + 1)) + 1960);
	var QualityHealth = "CODE:";
	QualityHealth += "SET !ERRORIGNORE YES"+"\n";
	QualityHealth += "SET !TIMEOUT_TAG 0 "+"\n";
	QualityHealth += "SET !DATASOURCE Last_First.txt"+"\n";
	QualityHealth += "SET !DATASOURCE_LINE 2"+"\n";
	QualityHealth += "SET !DATASOURCE_COLUMNS 2"+"\n";
	QualityHealth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registration ATTR=ID:firstName CONTENT={{!COL1}}"+"\n";
	QualityHealth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registration ATTR=ID:lastName CONTENT={{!COL2}}"+"\n";
	QualityHealth += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	QualityHealth += "SET !DATASOURCE_LINE 1"+"\n";
	QualityHealth += "SET !DATASOURCE_COLUMNS 1"+"\n";
	QualityHealth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registration ATTR=ID:email CONTENT={{!COL1}}"+"\n";
	QualityHealth += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	QualityHealth += "SET !DATASOURCE_LINE 1"+"\n";
	QualityHealth += "SET !DATASOURCE_COLUMNS 5"+"\n";
	QualityHealth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registration ATTR=ID:addressLineOne CONTENT={{!COL2}} "+"\n";
	QualityHealth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registration ATTR=ID:city CONTENT={{!COL3}} "+"\n";
	QualityHealth += "TAG POS=1 TYPE=SELECT FORM=ID:registration ATTR=ID:stateProvince CONTENT=%{{!COL4}} "+"\n";
	QualityHealth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registration ATTR=ID:zipPostalCode CONTENT={{!COL5}} "+"\n";
	QualityHealth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registration ATTR=ID:phoneNumber CONTENT={{!COL1}} "+"\n";
	QualityHealth += "EVENT TYPE=CLICK SELECTOR=\"#_birthDate\" BUTTON=0"+"\n";
	QualityHealth += "TAG POS=1 TYPE=SELECT ATTR=TXT:JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNo* CONTENT=%"+Thang+"\n";
	QualityHealth += "TAG POS=1 TYPE=SELECT ATTR=TXT:191819191920192119221923192419251926192719281929193019311932* CONTENT=%"+Nam+"\n";
	QualityHealth += "EVENT TYPE=MOUSEDOWN SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>TABLE>TBODY>TR:nth-of-type(2)>TD:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
	QualityHealth += "TAG POS=1 TYPE=SPAN ATTR=TXT:Female"+"\n";
	QualityHealth += "TAG POS=1 TYPE=BUTTON FORM=ID:registration ATTR=TXT:Get<SP>My<SP>FREE<SP>Samples!"+"\n";
	QualityHealth += "SET !TIMEOUT_TAG 10"+"\n";
	QualityHealth += "EVENT TYPE=CLICK SELECTOR=\"#registration>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>LABEL>SPAN\" BUTTON=0"+"\n";
	QualityHealth += "SET !TIMEOUT_TAG 0"+"\n";
	QualityHealth += "WAIT SECONDS=1"+"\n";
	QualityHealth += "EVENT TYPE=CLICK SELECTOR=\"#registration>DIV:nth-of-type(5)>DIV>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>LABEL>SPAN\" BUTTON=0"+"\n";
	QualityHealth += "WAIT SECONDS=20"+"\n";
	iimPlay( QualityHealth);
}
function Get_a_Gift_Card(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
	var Random_Phon1 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111  + 1)) + 1111 );
	var Get_a_Gift_Card = "CODE:";
	Get_a_Gift_Card += "SET !ERRORIGNORE YES"+"\n";
	Get_a_Gift_Card += "SET !TIMEOUT_TAG 0 "+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=ID:btn1"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=ID:btn2"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=ID:btn3"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=5"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE_LINE 1"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:email CONTENT={{!COL1}}"+"\n";
	Get_a_Gift_Card += "ONDIALOG POS=1 BUTTON=OK CONTENT="+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ID:commandBean ATTR=ID:submitbutton"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=5"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE Last_First.txt"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:firstName CONTENT={{!COL1}}"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:lastName CONTENT={{!COL2}}"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE_LINE 1"+"\n";
	Get_a_Gift_Card += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:street CONTENT={{!COL2}}"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:postalCode CONTENT={{!COL5}}"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:city CONTENT={{!COL3}}"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=SELECT FORM=ID:commandBean ATTR=ID:state CONTENT=%{{!COL4}}"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:homeAreaCode CONTENT=420"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:homePrefix CONTENT="+Random_Phon1+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:commandBean ATTR=ID:homeSuffix CONTENT="+Random_Phon2+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=SELECT FORM=ID:commandBean ATTR=ID:gender CONTENT=%M"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=SELECT FORM=ID:commandBean ATTR=ID:birthYear CONTENT=%"+Random_Nam+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=SELECT FORM=ID:commandBean ATTR=ID:366 CONTENT=%729"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ID:commandBean ATTR=ID:submitbutton"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=SRC:http://concept.imageservepro.com/MidPass/1.jpg"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=SRC:http://concept.imageservepro.com/MidPass/2(1).jpg"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=A ATTR=ID:skipButton"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=2"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=SRC:http://concept.imageservepro.com/MidPass/2(1).jpg"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=SRC:http://concept.imageservepro.com/MidPass/1.jpg"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=1"+"\n";
	Get_a_Gift_Card += "TAG POS=1 TYPE=IMG ATTR=SRC:http://concept.imageservepro.com/MidPass/1.jpg"+"\n";
	Get_a_Gift_Card += "WAIT SECONDS=20"+"\n";
	iimPlay(Get_a_Gift_Card);
}
function Amazon_$500(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
	// var Random_Phon0 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon1 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111  + 1)) + 1111 );
	var chon_Random = ["Mr.","Mrs.","Ms."];
	var So_RanDom = Math.floor((Math.random() * 2) + 0);
	var Amazon_$500 = "CODE:";
	Amazon_$500 += "SET !ERRORIGNORE YES"+"\n";
	Amazon_$500 += "SET !TIMEOUT_TAG 0"+"\n";
	Amazon_$500 += "SET !DATASOURCE Last_First.txt"+"\n";
	Amazon_$500 += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Amazon_$500 += "SET !DATASOURCE_COLUMNS 2 "+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=LABEL FORM=ID:user-form ATTR=TXT:"+chon_Random[So_RanDom]+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:user-form ATTR=ID:first-name CONTENT={{!COL1}}"+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:user-form ATTR=NAME:last_name CONTENT={{!COL2}}"+"\n";
	Amazon_$500 += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Amazon_$500 += "SET !DATASOURCE_LINE 1"+"\n";
	Amazon_$500 += "SET !DATASOURCE_COLUMNS 5 "+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:user-form ATTR=ID:autocomplete CONTENT={{!COL2}}"+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:user-form ATTR=ID:postal_code CONTENT={{!COL5}}"+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:user-form ATTR=ID:phone_number CONTENT=420-"+Random_Phon1+"-"+Random_Phon2+"\n";
	Amazon_$500 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Amazon_$500 += "SET !DATASOURCE_LINE 1"+"\n";
	Amazon_$500 += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:user-form ATTR=ID:email-address CONTENT={{!COL1}}"+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=SELECT FORM=ID:user-form ATTR=ID:month CONTENT=%0"+Random_Ngay+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=SELECT FORM=ID:user-form ATTR=ID:day CONTENT=%0"+Random_Thang+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=SELECT FORM=ID:user-form ATTR=ID:year CONTENT=%"+Random_Nam+"\n";
	Amazon_$500 += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:user-form ATTR=ID:submit"+"\n";
	Amazon_$500 += "WAIT SECONDS=20"+"\n";
	iimPlay(Amazon_$500);
}
function FavoriteConsumerBrands(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
	var Random_Phon1 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111  + 1)) + 1111 );
	var So_RanDom = Math.floor((Math.random() * 9) + 2);
	var FavoriteConsumerBrands = "CODE:";
	FavoriteConsumerBrands += "SET !ERRORIGNORE YES"+"\n";
	FavoriteConsumerBrands += "SET !TIMEOUT_TAG 0 "+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_LINE 1"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_COLUMNS 1"+"\n";
	FavoriteConsumerBrands += "EVENT TYPE=CLICK SELECTOR=\"#vote\" BUTTON=0"+"\n";
	FavoriteConsumerBrands += "EVENT TYPE=CLICK SELECTOR=\"#vote>OPTION:nth-of-type("+So_RanDom+")\" BUTTON=0"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=ID:email2 CONTENT={{!COL1}}"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:/?session_id=* ATTR=NAME:pse_980_resident CONTENT=YES"+"\n";
	FavoriteConsumerBrands += "EVENT TYPE=CLICK SELECTOR=\"#middle>TABLE>TBODY>TR:nth-of-type(6)>TD>INPUT\" BUTTON=0"+"\n";
	FavoriteConsumerBrands += "WAIT SECONDS=3"+"\n";	
	FavoriteConsumerBrands += "SET !DATASOURCE Last_First.txt"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_COLUMNS 2 "+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=NAME:pse_899_fname CONTENT={{!COL1}}"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=NAME:pse_899_lname CONTENT={{!COL2}}"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_LINE 1"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_COLUMNS 5"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=ID:zip CONTENT={{!COL5}}"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=NAME:pse_899_address CONTENT={{!COL2}}"+"\n";
	FavoriteConsumerBrands += "WAIT SECONDS=3"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=SELECT FORM=ACTION:/?session_id=* ATTR=ID:dob_month_short CONTENT=%0"+Random_Ngay+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=SELECT FORM=ACTION:/?session_id=* ATTR=ID:dob_day CONTENT=%0"+Random_Thang+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=SELECT FORM=ACTION:/?session_id=* ATTR=ID:dob_year CONTENT=%"+Random_Nam+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=NAME:pse_899_phone_area CONTENT=420"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=NAME:pse_899_phone_prefix CONTENT="+Random_Phon1+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=NAME:pse_899_phone_suffix CONTENT="+Random_Phon2+"\n";
	FavoriteConsumerBrands += "TAG POS=2 TYPE=INPUT:RADIO FORM=ACTION:/?session_id=* ATTR=NAME:pse_899_gender"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ACTION:/?session_id=* ATTR=NAME:submit&&SRC:http://favoriteconsumerbrands.com/8284/registration//button2.png"+"\n";
	FavoriteConsumerBrands += "WAIT SECONDS=20"+"\n";
	iimPlay(FavoriteConsumerBrands);
}
function Depend(File_Mail_info)
{// code chưa test
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Thang = Math.floor((Math.random() * 9) + 1);
	var Ngay = Math.floor((Math.random() * 9) + 1);
	var ONDIALOG = "CODE:";
	ONDIALOG += "WAIT SECONDS=5"+"\n";
	ONDIALOG += "ONDIALOG POS=1 BUTTON=OK CONTENT="+"\n";
	iimPlay(ONDIALOG);
	
	var Depend = "CODE:";
	Depend += "SET !ERRORIGNORE YES"+"\n";
	Depend += "SET !TIMEOUT_TAG 0  "+"\n";
	Depend += "SET !DATASOURCE Last_First.txt"+"\n";
	Depend += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
	Depend += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877497-first CONTENT={{!COL1}}"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877497-last CONTENT={{!COL2}}"+"\n";
	Depend += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Depend += "SET !DATASOURCE_LINE 1"+"\n";
	Depend += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877498 CONTENT={{!COL2}}"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877500 CONTENT={{!COL3}}"+"\n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51877501 CONTENT=%{{!COL4}}"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877502 CONTENT={{!COL5}}"+"\n";
	Depend += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Depend += "SET !DATASOURCE_LINE 1"+"\n";
	Depend += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:fsForm2673984 ATTR=ID:field51877503 CONTENT={{!COL1}}"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:fsForm2673984 ATTR=ID:field53719679_1"+"\n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51878788M CONTENT=%0"+Thang+"\n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51878788D CONTENT=%0"+Ngay+"\n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51878788Y CONTENT=%1965"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:fsForm2673984 ATTR=ID:field53719563_1"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:fsForm2673984 ATTR=ID:field51879097_2"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:fsForm2673984 ATTR=ID:field51878970_1 CONTENT=YES"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:fsForm2673984 ATTR=ID:field54420956_1 CONTENT=YES"+"\n";
	Depend += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:fsForm2673984 ATTR=ID:fsSubmitButton2673984"+"\n";
	Depend += "WAIT SECONDS=20"+"\n";
	iimPlay(Depend);
}
function Vaniki(File_Mail_info) 
{
	var Ten = Tao_Name();
	var Ho = Tao_Name();
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
	var Vaniki = "CODE:";
	Vaniki += "SET !ERRORIGNORE YES"+"\n";
	Vaniki += "SET !TIMEOUT_TAG 0"+"\n";
	// Vaniki += "SET !DATASOURCE Last_First.txt"+"\n";
	// Vaniki += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	// Vaniki += "SET !DATASOURCE_COLUMNS 2 "+"\n";
	Vaniki += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:sel CONTENT=%Mr"+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:firstName CONTENT="+Ten+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:lastName CONTENT="+Ho+"\n";
	Vaniki += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Vaniki += "SET !DATASOURCE_LINE 1"+"\n";
	Vaniki += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:email CONTENT={{!COL1}}"+"\n";
	Vaniki += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Vaniki += "SET !DATASOURCE_LINE 1"+"\n";
	Vaniki += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:phone CONTENT={{!COL1}}"+"\n";
	Vaniki += "WAIT SECONDS=2"+"\n";
	Vaniki += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:dobmonth CONTENT=%0"+Random_Ngay+"\n";
	Vaniki += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:dobday CONTENT=%0"+Random_Thang+"\n";
	Vaniki += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:dobyear CONTENT=%"+Random_Nam+"\n";
	Vaniki += "EVENT TYPE=CLICK SELECTOR=\"#addressLine\" BUTTON=0"+"\n";
	Vaniki += 'EVENTS TYPE=KEYPRESS SELECTOR="#addressLine" CHARS="{{!COL2}}"'+"\n";
	Vaniki += "WAIT SECONDS=5"+"\n";
	Vaniki += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>B:nth-of-type(3)\" BUTTON=0"+"\n";
	Vaniki += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV\" BUTTON=0"+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:pageForm ATTR=ID:terms CONTENT=YES"+"\n";
	Vaniki += "WAIT SECONDS=1"+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:pageForm ATTR=*"+"\n";
	Vaniki += "WAIT SECONDS=2"+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:pageForm ATTR=*"+"\n";
	Vaniki += "WAIT SECONDS=3"+"\n";
	Vaniki += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:pageForm ATTR=*"+"\n";
	Vaniki += "WAIT SECONDS=30"+"\n";
	iimPlay(Vaniki);
}
function Amazon(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
	var Random_Phon0 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon1 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111  + 1)) + 1111 );
	switch(Check_Off)
	{
		case "0":
		var ONDIALOG = "CODE:";
		ONDIALOG += "WAIT SECONDS=5"+"\n";
		ONDIALOG += "ONDIALOG POS=1 BUTTON=OK CONTENT="+"\n";
		iimPlay(ONDIALOG);
		var Amazon_B1 = "CODE:";
		Amazon_B1 += "SET !ERRORIGNORE YES"+"\n";
		Amazon_B1 += "SET !TIMEOUT_TAG 0 "+"\n";
		Amazon_B1 += "EVENT TYPE=CLICK SELECTOR=\"#modal01>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
		Amazon_B1 += "WAIT SECONDS=10"+"\n";
		Amazon_B1 += "EVENT TYPE=CLICK SELECTOR=\"#modal01>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
		Amazon_B1 += "WAIT SECONDS=10"+"\n";
		Amazon_B1 += "EVENT TYPE=CLICK SELECTOR=\"#secondpage>DIV:nth-of-type(4)>TABLE>TBODY>TR>TD:nth-of-type(2)>DIV>A\" BUTTON=0"+"\n";
		Amazon_B1 += "EVENT TYPE=CLICK SELECTOR=\"#teaser>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
		iimPlay(Amazon_B1);
		break;
		case "224":
		var Amazon_B1 = "CODE:";
		Amazon_B1 += "SET !ERRORIGNORE YES"+"\n";
		Amazon_B1 += "SET !TIMEOUT_TAG 0 "+"\n";
		Amazon_B1 += "EVENT TYPE=CLICK SELECTOR=\"#teaser>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
		Amazon_B1 += "EVENT TYPE=CLICK SELECTOR=\"#teaser>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
		iimPlay(Amazon_B1);
		iimPlayCode("WAIT SECONDS=1");
		break;
	}
	var Amazon = "CODE:";
	Amazon += "SET !ERRORIGNORE YES"+"\n";
	Amazon += "SET !TIMEOUT_TAG 0 "+"\n";
	Amazon += "SET !DATASOURCE Last_First.txt"+"\n";
	Amazon += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Amazon += "SET !DATASOURCE_COLUMNS 2 "+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-1 ATTR=ID:first_name CONTENT={{!COL1}}"+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-1 ATTR=ID:last_name CONTENT={{!COL2}}"+"\n";
	Amazon += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Amazon += "SET !DATASOURCE_LINE 1"+"\n";
	Amazon += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:frm-form-1 ATTR=ID:email_address CONTENT={{!COL1}}"+"\n";
	Amazon += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Continue<SP>100%<SP>Free"+"\n";
	Amazon += "WAIT SECONDS=7"+"\n";
	Amazon += "TAG POS=1 TYPE=BUTTON FORM=ID:frm-form-2 ATTR=CLASS:btn<SP>btn-checkbox<SP>btn-gender&&VALUE:female&&TXT:"+"\n";
	Amazon += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Amazon += "SET !DATASOURCE_LINE 1"+"\n";
	Amazon += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:frm-form-2 ATTR=ID:zip_code CONTENT={{!COL5}}"+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-2 ATTR=ID:address CONTENT={{!COL2}}"+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-2 ATTR=ID:region CONTENT={{!COL4}}"+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-2 ATTR=ID:city CONTENT={{!COL3}}"+"\n";
	Amazon += "SET !TIMEOUT_TAG 5"+"\n";
	Amazon += "EVENT TYPE=CLICK SELECTOR=\"#city-select\" BUTTON=0"+"\n";
	Amazon += "EVENT TYPE=CLICK SELECTOR=\"#city-select>OPTION:nth-of-type(2)\" BUTTON=0"+"\n";
	Amazon += "SET !TIMEOUT_TAG 0"+"\n";
	Amazon += "EVENT TYPE=CLICK SELECTOR=\"#phone_cell_1\" BUTTON=0"+"\n";
	Amazon += "EVENTS TYPE=KEYPRESS SELECTOR=\"#phone_cell_1\" CHARS="+Random_Phon0+"\n";
	Amazon += "EVENTS TYPE=KEYPRESS SELECTOR=\"#phone_cell_2\" CHARS="+Random_Phon1+"\n";
	Amazon += "EVENTS TYPE=KEYPRESS SELECTOR=\"#phone_cell_3\" CHARS="+Random_Phon2+"\n";
	Amazon += "TAG POS=1 TYPE=SELECT FORM=ID:frm-form-2 ATTR=ID:date_m CONTENT=%0"+Random_Ngay+"\n";
	Amazon += "TAG POS=1 TYPE=SELECT FORM=ID:frm-form-2 ATTR=ID:date_d CONTENT=%0"+Random_Thang+"\n";
	Amazon += "TAG POS=1 TYPE=SELECT FORM=ID:frm-form-2 ATTR=ID:date_y CONTENT=%"+Random_Nam+"\n";
	Amazon += "TAG POS=1 TYPE=LABEL FORM=ID:frm-form-2 ATTR=CLASS:label-checkbox&&FOR:opt_in&&TXT:"+"\n";
	Amazon += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:frm-form-2 ATTR=ID:opt_in CONTENT=YES"+"\n";
	Amazon += "TAG POS=2 TYPE=BUTTON ATTR=TXT:Continue<SP>100%<SP>Free"+"\n";
	Amazon += "WAIT SECONDS=10"+"\n";
	Amazon += "TAG POS=2 TYPE=BUTTON ATTR=TXT:Continue<SP>100%<SP>Free"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=4 TYPE=DIV ATTR=TXT:Yes"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=1 TYPE=SELECT ATTR=NAME:coreg6251 CONTENT=%15764"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=1 TYPE=SELECT ATTR=NAME:coreg6257 CONTENT=%15881"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=8 TYPE=DIV ATTR=TXT:Yes"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=7 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=12 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=16 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=4 TYPE=DIV ATTR=TXT:No,<SP>Rented"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=20 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=24 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=28 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=1 TYPE=SELECT ATTR=NAME:coreg2239 CONTENT=%5125"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=32 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=36 TYPE=DIV ATTR=TXT:Yes"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=40 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=1 TYPE=SELECT ATTR=NAME:coreg2254 CONTENT=%5168"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=4 TYPE=DIV ATTR=TXT:Medicaid"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=44 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=48 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=52 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=56 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=60 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=64 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=68 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=72 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=76 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=80 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=1"+"\n";
	Amazon += "TAG POS=84 TYPE=DIV ATTR=TXT:No"+"\n";
	Amazon += "WAIT SECONDS=30"+"\n";
	iimPlay(Amazon);
}
function Giveaway(File_Mail_info)
{
	var Ngay = Math.floor((Math.random() * 9) + 1);
	var Thang = Math.floor((Math.random() * 9) + 1);
	var Nam = Math.floor((Math.random() * (1980 - 1970 + 1)) + 1970);
	var Giveaway = "CODE:";
	Giveaway += "SET !ERRORIGNORE YES"+"\n";
	Giveaway += "SET !TIMEOUT_TAG 0"+"\n";
	Giveaway += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Giveaway += "SET !DATASOURCE_LINE 1"+"\n";
	Giveaway += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:FlowSQForm ATTR=ID:em CONTENT={{!COL1}}"+"\n";
	Giveaway += "WAIT SECONDS=3"+"\n";
	Giveaway += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
	Giveaway += "WAIT SECONDS=5"+"\n";
	Giveaway += "SET !DATASOURCE Last_First.txt"+"\n";
	Giveaway += "SET !DATASOURCE_LINE {{!VAR1}} "+"\n";
	Giveaway += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:firstname CONTENT={{!COL1}}"+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:lastname CONTENT={{!COL2}}"+"\n";
	Giveaway += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Giveaway += "SET !DATASOURCE_LINE 1"+"\n";
	Giveaway += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:FlowSQForm ATTR=ID:zippost CONTENT={{!COL5}}"+"\n";
	Giveaway += "TAG POS=7 TYPE=DIV ATTR=TXT:"+"\n";
	Giveaway += "WAIT SECONDS=1"+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:address CONTENT={{!COL2}}"+"\n";
	Giveaway += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:state CONTENT=%{{!COL4}} "+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:city CONTENT={{!COL3}}"+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:FlowSQForm ATTR=ID:telephone CONTENT={{!COL1}}"+"\n";
	Giveaway += "TAG POS=7 TYPE=DIV ATTR=TXT:"+"\n";
	Giveaway += "WAIT SECONDS=1"+"\n";
	Giveaway += 'EVENT TYPE=CLICK SELECTOR="#birthmonth" BUTTON=0'+"\n";
	Giveaway += 'EVENT TYPE=CLICK SELECTOR="#birthmonth>OPTION:nth-of-type(2)" BUTTON='+Ngay+"\n";
	Giveaway += "WAIT SECONDS=1"+"\n";
	Giveaway += 'EVENT TYPE=CLICK SELECTOR="#birthday" BUTTON=0'+"\n";
	Giveaway += 'EVENT TYPE=CLICK SELECTOR="#birthday>OPTION:nth-of-type(2)" BUTTON='+Thang+"\n";
	Giveaway += "WAIT SECONDS=1"+"\n";
	Giveaway += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:birthyear CONTENT=%"+Nam+"\n";
	Giveaway += "WAIT SECONDS=1"+"\n";
	Giveaway += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:FlowSQForm ATTR=ID:iAgree-Checkbox CONTENT=YES"+"\n";
	Giveaway += "WAIT SECONDS=4"+"\n";
	Giveaway += "TAG POS=7 TYPE=DIV ATTR=TXT:"+"\n";
	Giveaway += "WAIT SECONDS=30"+"\n";
	iimPlay(Giveaway);
}
function Free_Fall_Samples(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
	var Error_capcha = 0;
	var Free_Fall_Samples = "CODE:";
	Free_Fall_Samples += "SET !ERRORIGNORE YES"+"\n";
	Free_Fall_Samples += "SET !TIMEOUT_TAG 0"+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=SELECT FORM=ID:formSubmit ATTR=ID:gender CONTENT=%F"+"\n";
	Free_Fall_Samples += "SET !DATASOURCE Last_First.txt"+"\n";
	Free_Fall_Samples += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Free_Fall_Samples += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formSubmit ATTR=ID:first CONTENT={{!COL1}} "+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formSubmit ATTR=ID:last CONTENT={{!COL2}} "+"\n";
	Free_Fall_Samples += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Free_Fall_Samples += "SET !DATASOURCE_LINE 1"+"\n";
	Free_Fall_Samples += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:formSubmit ATTR=ID:email CONTENT={{!COL1}} "+"\n";
	Free_Fall_Samples += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Free_Fall_Samples += "SET !DATASOURCE_LINE 1"+"\n";
	Free_Fall_Samples += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formSubmit ATTR=ID:addressform CONTENT={{!COL2}} "+"\n";
	Free_Fall_Samples += "'TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formSubmit ATTR=ID:address2 CONTENT=1"+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formSubmit ATTR=ID:city CONTENT={{!COL3}} "+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=SELECT FORM=ID:formSubmit ATTR=ID:state CONTENT=%{{!COL4}} "+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formSubmit ATTR=ID:zip CONTENT={{!COL5}} "+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:formSubmit ATTR=ID:phone CONTENT={{!COL1}} "+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=SELECT FORM=ID:formSubmit ATTR=ID:dobm CONTENT=%0"+Random_Ngay+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=SELECT FORM=ID:formSubmit ATTR=ID:dobd CONTENT=%0"+Random_Thang+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=SELECT FORM=ID:formSubmit ATTR=ID:doby CONTENT=%"+Random_Nam+"\n";
	Free_Fall_Samples += "'TAG POS=1 TYPE=BUTTON FORM=ID:formSubmit ATTR=ID:submitbutton"+"\n";
	Free_Fall_Samples += "SET !TIMEOUT_TAG 100 "+" \n";
	Free_Fall_Samples += "TAG POS=1 TYPE=P ATTR=ID:flowSubHeader" + "\n";
	Free_Fall_Samples += "SET !TIMEOUT_TAG 0 "+" \n";
	Free_Fall_Samples += "WAIT SECONDS=5"+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=2 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=3 TYPE=LABEL ATTR=TXT:Yes"+"\n";
	Free_Fall_Samples += "TAG POS=4 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=5 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=6 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=7 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=8 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=9 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=10 TYPE=LABEL ATTR=TXT:No"+"\n";
	Free_Fall_Samples += "TAG POS=11 TYPE=LABEL ATTR=TXT:Yes"+"\n";
	Free_Fall_Samples += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Continue"+"\n";
	Free_Fall_Samples += "WAIT SECONDS=20"+"\n";

	while(true)
	{
		var check_cap = check_capcha()
		if(check_cap == true)
		{
			iimPlay(Free_Fall_Samples);
			break;
		}
		else
		{
			Error_capcha++;
			iimPlay(REFRESH_Site);
			iimDisplay("Lỗi Recaptcha");
			if(Error_capcha > 2)
			{
				break;
			}
		}
	}
}
function iPhone7(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);
	var iPhone7 = "CODE:";
	iPhone7 += "SET !ERRORIGNORE YES"+"\n";
	iPhone7 += "SET !TIMEOUT_TAG 0 "+"\n";
	iPhone7 += 'EVENT TYPE=CLICK SELECTOR="#modal01>DIV>DIV>BUTTON" BUTTON=0'+"\n";
	iPhone7 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Bill<SP>Gates"+"\n";
	iPhone7 += "TAG POS=1 TYPE=SPAN ATTR=TXT:1998"+"\n";
	iPhone7 += "TAG POS=1 TYPE=SPAN ATTR=TXT:USA"+"\n";
	iPhone7 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Facebook"+"\n";
	iPhone7 += "WAIT SECONDS=10"+"\n";
	iPhone7 += "TAG POS=1 TYPE=DIV ATTR=TXT:CLAIM"+"\n";
	iPhone7 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Yes"+"\n";
	iPhone7 += "SET !DATASOURCE Last_First.txt"+"\n";
	iPhone7 += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	iPhone7 += "SET !DATASOURCE_COLUMNS 2 "+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-1 ATTR=ID:first_name CONTENT={{!COL1}}"+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-1 ATTR=ID:last_name CONTENT={{!COL2}}"+"\n";
	iPhone7 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	iPhone7 += "SET !DATASOURCE_LINE 1"+"\n";
	iPhone7 += "SET !DATASOURCE_COLUMNS 1"+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:frm-form-1 ATTR=ID:email_address CONTENT={{!COL1}}"+"\n";
	iPhone7 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Continue<SP>100%<SP>Free"+"\n";
	iPhone7 += "WAIT SECONDS=5"+"\n";
	iPhone7 += "TAG POS=1 TYPE=BUTTON FORM=ID:frm-form-2 ATTR=CLASS:btn<SP>btn-checkbox<SP>btn-gender&&VALUE:female&&TXT:"+"\n";
	iPhone7 += "WAIT SECONDS=3"+"\n";
	iPhone7 += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	iPhone7 += "SET !DATASOURCE_LINE 1"+"\n";
	iPhone7 += "SET !DATASOURCE_COLUMNS 5 "+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:frm-form-2 ATTR=ID:zip_code CONTENT={{!COL5}}"+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-2 ATTR=ID:address CONTENT={{!COL2}}"+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-2 ATTR=ID:city CONTENT={{!COL3}}"+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:frm-form-2 ATTR=ID:region CONTENT={{!COL4}}"+"\n";
	iPhone7 += 'EVENT TYPE=CLICK SELECTOR="#phone_cell_1" BUTTON=0'+"\n";
	iPhone7 += 'EVENTS TYPE=KEYPRESS SELECTOR="#phone_cell_1" CHARS="420"'+"\n";
	iPhone7 += 'EVENTS TYPE=KEYPRESS SELECTOR="#phone_cell_2" CHARS='+Random_Phon1+"\n";
	iPhone7 += 'EVENTS TYPE=KEYPRESS SELECTOR="#phone_cell_3" CHARS='+Random_Phon2+"\n";
	iPhone7 += "TAG POS=1 TYPE=SELECT FORM=ID:frm-form-2 ATTR=ID:date_m CONTENT=%0"+Random_Ngay+"\n";
	iPhone7 += "TAG POS=1 TYPE=SELECT FORM=ID:frm-form-2 ATTR=ID:date_d CONTENT=%0"+Random_Thang+"\n";
	iPhone7 += "TAG POS=1 TYPE=SELECT FORM=ID:frm-form-2 ATTR=ID:date_y CONTENT=%"+Random_Nam+"\n";
	iPhone7 += "TAG POS=1 TYPE=LABEL FORM=ID:frm-form-2 ATTR=CLASS:label-checkbox&&FOR:opt_in&&TXT:"+"\n";
	iPhone7 += "WAIT SECONDS=3"+"\n";
	iPhone7 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:frm-form-2 ATTR=ID:opt_in CONTENT=YES"+"\n";
	iPhone7 += "TAG POS=2 TYPE=BUTTON ATTR=TXT:Continue<SP>100%<SP>Free"+"\n";
	iPhone7 += "SET !TIMEOUT_TAG 20 "+"\n";
	iPhone7 += "TAG POS=1 TYPE=H1 ATTR=TXT:Your<SP>chosen<SP>prize:<SP>iPhone7!.<SP>Complete<SP>our*"+"\n";
	iPhone7 += "SET !TIMEOUT_TAG 0 "+"\n";
	iPhone7 += "TAG POS=3 TYPE=DIV ATTR=TXT:Yes"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=7 TYPE=DIV ATTR=TXT:Yes"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=1 TYPE=SELECT ATTR=NAME:coreg4608 CONTENT=%10872"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=7 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=11 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=15 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=3 TYPE=DIV ATTR=TXT:Yes,<SP>Owned"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=19 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=23 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=23 TYPE=DIV ATTR=TXT:Yes"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=31 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=35 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=39 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=1 TYPE=SELECT ATTR=NAME:coreg2239 CONTENT=%5125"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=43 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=47 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=51 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=1 TYPE=SELECT ATTR=NAME:coreg2254 CONTENT=%5167"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=3 TYPE=DIV ATTR=TXT:Private"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=51 TYPE=DIV ATTR=TXT:Yes"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=3 TYPE=DIV ATTR=TXT:Chronic<SP>Pain"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=55 TYPE=DIV ATTR=TXT:Yes"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=63 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=67 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=71 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=71 TYPE=DIV ATTR=TXT:Yes"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=79 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=83 TYPE=DIV ATTR=TXT:No"+"\n";
	iPhone7 += "WAIT SECONDS=1"+"\n";
	iPhone7 += "TAG POS=83 TYPE=DIV ATTR=TXT:Yes"+"\n";
	iPhone7 += "WAIT SECONDS=30"+"\n";
	iimPlay(iPhone7);
}
function Simply(File_Mail_info)
{
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);
	var Simply = "CODE:";
	Simply += "SET !ERRORIGNORE YES"+" \n";
	Simply += "SET !TIMEOUT_TAG 0 "+" \n";
	Simply += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	Simply += "SET !DATASOURCE_LINE 1"+" \n";
	Simply += "SET !DATASOURCE_COLUMNS 5"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:ZIP CONTENT={{!COL5}}"+" \n";
	Simply += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	Simply += "SET !DATASOURCE_LINE 1"+" \n";
	Simply += "SET !DATASOURCE_COLUMNS 1"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:PageForm ATTR=ID:form1_leadem CONTENT={{!COL1}}"+" \n";
	Simply += "TAG POS=1 TYPE=LABEL FORM=ID:PageForm ATTR=FOR:TERMS&&TXT:"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:PageForm ATTR=ID:TERMS CONTENT=YES"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:SUBMIT"+" \n";
	Simply += "SET !TIMEOUT_TAG 30"+" \n";
	Simply += "TAG POS=1 TYPE=H1 ATTR=TXT:Please<SP>complete<SP>the<SP>fields<SP>below"+" \n";
	Simply += "SET !TIMEOUT_TAG 0"+" \n";
	Simply += "SET !DATASOURCE Last_First.txt"+" \n";
	Simply += "SET !DATASOURCE_LINE 3"+" \n";
	Simply += "SET !DATASOURCE_COLUMNS 2"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:PageForm ATTR=ID:FIRST_NAME CONTENT={{!COL1}}"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:PageForm ATTR=ID:LAST_NAME CONTENT={{!COL2}}"+" \n";
	Simply += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	Simply += "SET !DATASOURCE_LINE 1"+" \n";
	Simply += "SET !DATASOURCE_COLUMNS 5"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:PageForm ATTR=ID:CITY CONTENT={{!COL3}}"+" \n";
	Simply += "TAG POS=1 TYPE=SELECT FORM=ID:PageForm ATTR=ID:STATE CONTENT=%{{!COL4}}"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:PageForm ATTR=ID:ADDRESS1 CONTENT={{!COL2}}"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:HOME_PHONE_AREA CONTENT=420"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:HOME_PHONE_PREFIX CONTENT="+Random_Phon1+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:PageForm ATTR=ID:HOME_PHONE_SUFFIX CONTENT="+Random_Phon2+" \n";
	Simply += "TAG POS=1 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:Yes"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:PageForm ATTR=ID:rbtnHasCheckingAccountYes"+" \n";
	Simply += "TAG POS=1 TYPE=LABEL FORM=ID:PageForm ATTR=TXT:Yes,<SP>please!"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:PageForm ATTR=ID:rbtnCheckingNSYes"+" \n";
	Simply += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:PageForm ATTR=ID:TERMS CONTENT=YES"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:SUBMIT"+" \n";
	Simply += "SET !TIMEOUT_TAG 30"+" \n";
	Simply += "TAG POS=1 TYPE=IMG ATTR=SRC:http://www.simplycellphonesforyou.com/blue/Wax/img/ns_button_reveal_l.png"+" \n";
	Simply += "SET !TIMEOUT_TAG 0"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q01-a02"+" \n";
	Simply += "WAIT SECONDS=0.5"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q02-a01"+" \n";
	Simply += "WAIT SECONDS=0.5"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q02-a02"+" \n";
	Simply += "WAIT SECONDS=0.5"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q03-a02"+" \n";
	Simply += "WAIT SECONDS=0.5"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q04-a02"+" \n";
	Simply += "WAIT SECONDS=0.5"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q05-a02"+" \n";
	Simply += "WAIT SECONDS=0.5"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q06-a02"+" \n";
	Simply += "WAIT SECONDS=0.5"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:q06-a02"+" \n";
	Simply += "SET !TIMEOUT_TAG 30"+" \n";
	Simply += "TAG POS=1 TYPE=A ATTR=ID:Apply2"+" \n";
	Simply += "WAIT SECONDS = 20"+" \n";
	iimPlay(Simply);
}
function Depend(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1979 - 1975 + 1)) + 1975);

	var Depend = "CODE:";
	Depend += "SET !ERRORIGNORE YES"+" \n";
	Depend += "SET !TIMEOUT_TAG 0"+" \n";
	Depend += "SET !DATASOURCE Last_First.txt"+" \n";
	Depend += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
	Depend += "SET !DATASOURCE_COLUMNS 2 "+" \n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877497-first CONTENT={{!COL1}}"+" \n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877497-last CONTENT={{!COL2}}"+" \n";
	Depend += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	Depend += "SET !DATASOURCE_LINE 1"+" \n";
	Depend += "SET !DATASOURCE_COLUMNS 5"+" \n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877498 CONTENT={{!COL2}}"+" \n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877500 CONTENT={{!COL3}}"+" \n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51877501 CONTENT=%{{!COL4}}"+" \n";
	Depend += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:fsForm2673984 ATTR=ID:field51877502 CONTENT={{!COL5}}"+" \n";
	Depend += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	Depend += "SET !DATASOURCE_LINE 1"+" \n";
	Depend += "SET !DATASOURCE_COLUMNS 1"+" \n";
	Depend += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:fsForm2673984 ATTR=ID:field51877503 CONTENT={{!COL1}}"+" \n";
	Depend += "TAG POS=1 TYPE=LABEL FORM=ID:fsForm2673984 ATTR=TXT:Female"+" \n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51878788M CONTENT=%0"+Random_Ngay+" \n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51878788D CONTENT=%0"+Random_Thang+" \n";
	Depend += "TAG POS=1 TYPE=SELECT FORM=ID:fsForm2673984 ATTR=ID:field51878788Y CONTENT=%"+Random_Nam+" \n";
	Depend += "TAG POS=1 TYPE=LABEL FORM=ID:fsForm2673984 ATTR=TXT:S/M"+" \n";
	Depend += "TAG POS=1 TYPE=LABEL FORM=ID:fsForm2673984 ATTR=TXT:Less<SP>than<SP>one<SP>year"+" \n";
	Depend += "TAG POS=1 TYPE=LABEL FORM=ID:fsForm2673984 ATTR=TXT:Sign<SP>up<SP>and<SP>be<SP>the<SP>first<SP>to<SP>know<SP>abo*"+" \n";
	Depend += "TAG POS=1 TYPE=LABEL FORM=ID:fsForm2673984 ATTR=TXT:I<SP>would<SP>like<SP>to<SP>give<SP>feedback<SP>on<SP>the*"+" \n";
	Depend += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:fsForm2673984 ATTR=ID:fsSubmitButton2673984"+" \n";
	Depend += "WAIT SECONDS = 20"+" \n";
	iimPlay(Depend);
}
function AARP(File_Mail_info)                         // AARP
{
	var Error = 0;var line = 1;
	var pass = Tao_Pass();
	var KS1 = Math.floor((Math.random() * 6) + 1);
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var AARP_1 = "CODE:";
	AARP_1 += "SET !ERRORIGNORE YES "+" \n";
	AARP_1 += "SET !TIMEOUT_TAG 0 "+" \n";
	// AARP_1 += "TAG POS=1 TYPE=A ATTR=TXT:DISCOVER<SP>EASY<SP>WAYS<SP>TO<SP>GIVE "+" \n";
	// AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:primary_opt_in_checkbox&&NAME:primary_opt_in&&CHECKED:checked&&TYPE:checkbox CONTENT=YES"+" \n";
	// AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:secondary_opt_in_checkbox&&NAME:secondary_opt_in&&CHECKED:checked&&TYPE:checkbox CONTENT=YES"+" \n";
	// AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:primary_opt_in_checkbox CONTENT=YES"+" \n";
	// AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:secondary_opt_in_checkbox CONTENT=YES"+" \n";
	// AARP_1 += "TAG POS=1 TYPE=A ATTR=CLASS:btn&&HREF:#&&ONCLICK:document.forms.login_form.submit();return<SP>false;"+" \n";
	AARP_1 += "TAG POS=1 TYPE=A ATTR=TXT:Get<SP>started"+" \n";
	iimPlay(AARP_1);	
	switch(Check_Off)
	{
		case "519":
		line = 2;
		break;
	}
	var AARP = "CODE:";
	AARP += "SET !ERRORIGNORE YES "+" \n";
	AARP += "SET !TIMEOUT_TAG 80 "+" \n";
	AARP += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
	AARP += "SET !TIMEOUT_TAG 0 "+" \n";
	AARP += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	AARP += "SET !DATASOURCE_LINE "+line+" \n";
	AARP += "SET !DATASOURCE_COLUMNS 1"+" \n";
	AARP += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registerForm ATTR=ID:email CONTENT={{!COL1}}"+" \n";
	AARP += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registerForm ATTR=ID:emailConfirm CONTENT={{!COL1}}"+" \n";
	AARP += "SET !ENCRYPTION NO"+" \n";
	AARP += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:registerForm ATTR=ID:password CONTENT="+pass+Random_Ngay+" \n";
	AARP += "WAIT SECONDS=0.5"+" \n";
	AARP += "SET !DATASOURCE Last_First.txt"+" \n";
	AARP += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
	AARP += "SET !DATASOURCE_COLUMNS 2  "+" \n";
	AARP += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registerForm ATTR=ID:firstName CONTENT={{!COL1}}"+" \n";
	AARP += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registerForm ATTR=ID:lastName CONTENT={{!COL2}}"+" \n";
	AARP += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	AARP += "SET !DATASOURCE_LINE "+line+" \n";
	AARP += "SET !DATASOURCE_COLUMNS 5"+" \n";
	AARP += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:registerForm ATTR=ID:postalCode CONTENT={{!COL5}} "+" \n";
	AARP += "TAG POS=1 TYPE=SELECT FORM=ID:registerForm ATTR=ID:birthMonth CONTENT=%"+Random_Ngay+" \n";
	AARP += "TAG POS=1 TYPE=SELECT FORM=ID:registerForm ATTR=ID:birthDay CONTENT=%"+Random_Thang+" \n";
	AARP += "TAG POS=1 TYPE=SELECT FORM=ID:registerForm ATTR=ID:birthYear CONTENT=%1968"+" \n";
	AARP += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:registerForm ATTR=ID:tos CONTENT=YES"+" \n";
	AARP += "TAG POS=1 TYPE=SPAN ATTR=TXT:Register"+" \n";
	AARP += "SET !TIMEOUT_TAG 15 "+" \n";
	// AARP += "TAG POS=1 TYPE=A ATTR=TXT:START<SP>EXPLORING<SP>TO<SP>EARN<SP>MORE<SP>SWEEPSTAKES<SP>E*"+" \n";
	AARP += "TAG POS="+KS1+" TYPE=INPUT:CHECKBOX FORM=ID:newUserNewsletterForm ATTR=ID:selectedNewsLetters CONTENT=YES"+" \n";
	AARP += "TAG POS=1 TYPE=SPAN ATTR=TXT:Continue"+" \n";
	AARP += "SET !TIMEOUT_TAG 10 "+" \n";
	AARP += "EVENT TYPE=CLICK SELECTOR=\"#subscriptionsSuccessOverlay>DIV:nth-of-type(3)>A>SPAN\" BUTTON=0"+" \n";
	AARP += "WAIT SECONDS=30"+" \n";
	while(true)
	{
		var capcha = check_capcha();
		if(capcha == true)
		{
			iimPlay(AARP);
			break;
		}
		else
		{
			iimPlay(REFRESH_Site);
			Error++;
			iimDisplay("Mã Off "+Check_Off+" Lỗi bắt capcha "+Error);
			if(F5_site_Rong > 2)
			{
				break;
			}
		}
	}
}
function Vouchers_Avenue(File_Mail_info)
{
	var New_dong = 1;
	var lam_lai = 1;
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1982 - 1975 + 1)) + 1975);
	
	var Vouchers_Avenue = "CODE:"; 
	Vouchers_Avenue += "SET !ERRORIGNORE YES" + "\n";
	Vouchers_Avenue += "SET !TIMEOUT_TAG 0" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:first_flavour_input" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+New_dong + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 1" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:prelanding-email CONTENT={{!COL1}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=ID:js-skip-prelanding" + "\n";
	Vouchers_Avenue += "WAIT SECONDS=1" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=LABEL FORM=ID:register_member ATTR=TXT:Ms." + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_gender CONTENT=%0" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Last_First.txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+Random_Ten_Ho + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 2" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_firstname CONTENT={{!COL1}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_lastname CONTENT={{!COL2}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=BUTTON FORM=ID:register_member ATTR=TXT:Continue" + "\n";
	Vouchers_Avenue += "WAIT SECONDS=1" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+New_dong + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 5" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_address CONTENT={{!COL2}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_postal_code CONTENT={{!COL5}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_state CONTENT=%{{!COL4}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_locality CONTENT={{!COL3}}" + "\n";
	Vouchers_Avenue += "TAG POS=2 TYPE=BUTTON FORM=ID:register_member ATTR=TXT:Continue" + "\n";
	Vouchers_Avenue += "WAIT SECONDS=1" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+New_dong + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 1" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:register_member ATTR=ID:email CONTENT= {{!COL1}}" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+New_dong + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 5" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:register_member ATTR=ID:personal_phone CONTENT={{!COL1}}" + "\n";
	Vouchers_Avenue += "TAG POS=3 TYPE=BUTTON FORM=ID:register_member ATTR=TXT:Continue" + "\n";
	Vouchers_Avenue += "WAIT SECONDS=1" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_birthdate_month CONTENT=%"+Random_Thang + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_birthdate_day CONTENT=%"+Random_Ngay + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_birthdate_year CONTENT=%"+Random_Nam + "\n";
	Vouchers_Avenue += 'EVENT TYPE=CLICK SELECTOR="#registerform-panel>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV:nth-of-type(4)>BUTTON" BUTTON=0' + "\n";
	Vouchers_Avenue += 'EVENT TYPE=CLICK SELECTOR="#registerform-panel>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV:nth-of-type(4)>BUTTON" BUTTON=0' + "\n";
	Vouchers_Avenue += "SET !TIMEOUT_TAG 30" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=DIV ATTR=TXT:Complete<SP>the<SP>survey<SP>for<SP>a<SP>chance<SP>to<SP>win" + "\n";
	Vouchers_Avenue += "" + "\n";
	iimPlay(Vouchers_Avenue);
	
}
function Win_$1000(File_Mail_info)
{
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Win_$1000 = "CODE:";
	Win_$1000 += "SET !ERRORIGNORE YES"+" \n";
	Win_$1000 += "SET !TIMEOUT_TAG 0"+" \n";
	Win_$1000 += "TAG POS=1 TYPE=LABEL FORM=ID:form_reg_full ATTR=ID:label_gender_female"+" \n";
	Win_$1000 += "SET !DATASOURCE Last_First.txt"+" \n";
	Win_$1000 += "SET !DATASOURCE_LINE "+Ten_Ho+" \n";
	Win_$1000 += "SET !DATASOURCE_COLUMNS 2"+" \n";
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:firstname CONTENT={{!COL1}}"+" \n";
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:lastname CONTENT={{!COL2}}"+" \n";
	Win_$1000 += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	Win_$1000 += "SET !DATASOURCE_LINE 1"+" \n";
	Win_$1000 += "SET !DATASOURCE_COLUMNS 5 "+" \n";
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:tel_areacode CONTENT=420"+" \n";
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:tel_number1 CONTENT="+Random_Phon1+" \n";
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:tel_number2 CONTENT="+Random_Phon2+" \n";
	
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:street CONTENT={{!COL2}} "+" \n";
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:zipcode CONTENT={{!COL5}} "+" \n";
	Win_$1000 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_reg_full ATTR=ID:city CONTENT={{!COL3}} "+" \n";
	Win_$1000 += "WAIT SECONDS=4"+" \n";
	Win_$1000 += 'EVENT TYPE=CLICK SELECTOR="#city" BUTTON=0' + "\n";
	Win_$1000 += 'EVENT TYPE=MOUSEDOWN SELECTOR="#city>OPTION:nth-of-type(3)" BUTTON=0' + "\n";
	Win_$1000 += "TAG POS=1 TYPE=SELECT FORM=ID:form_reg_full ATTR=ID:province CONTENT=%5"+" \n";
	
	Win_$1000 += "TAG POS=1 TYPE=SELECT FORM=ID:form_reg_full ATTR=ID:monthofbirth CONTENT=%0"+Random_Ngay+" \n";
	Win_$1000 += "TAG POS=1 TYPE=SELECT FORM=ID:form_reg_full ATTR=ID:dayofbirth CONTENT=%0"+Random_Thang+" \n";
	Win_$1000 += "TAG POS=1 TYPE=SELECT FORM=ID:form_reg_full ATTR=ID:yearofbirth CONTENT=%"+Random_Nam+" \n";
	Win_$1000 += "SET !TIMEOUT_TAG 90"+" \n";
	Win_$1000 += "TAG POS=3 TYPE=DIV ATTR=TXT:Take<SP>survey,<SP>earn<SP>points<SP>&<SP>qualify!"+" \n";
	Win_$1000 += "SET !TIMEOUT_TAG 0"+" \n";
	Win_$1000 += "TAG POS=3 TYPE=DIV ATTR=TXT:No"+" \n";
	Win_$1000 += "WAIT SECONDS=1"+" \n";
	Win_$1000 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Get<SP>A<SP>Card"+" \n";
	Win_$1000 += "WAIT SECONDS=1"+" \n";
	Win_$1000 += "TAG POS=1 TYPE=BUTTON FORM=ID:form_multicoreg ATTR=ID:submit_multicoreg"+" \n";
	Win_$1000 += "WAIT SECONDS=1"+" \n";
	Win_$1000 += "TAG POS=1 TYPE=BUTTON FORM=ID:form_multicoreg ATTR=ID:submit_multicoreg"+" \n";
	Win_$1000 += "WAIT SECONDS=1"+" \n";
	Win_$1000 += "TAG POS=4 TYPE=DIV ATTR=TXT:I<SP>love<SP>coupons!"+" \n";
	Win_$1000 += "WAIT SECONDS=1"+" \n";
	Win_$1000 += 'FRAME NAME="a92b0ac7"'+" \n";
	Win_$1000 += "TAG POS=1 TYPE=IMG ATTR=SRC:*"+" \n";
	Win_$1000 += "WAIT SECONDS=30"+" \n";
	while(true)
	{
		var Win_$1000_mail = "CODE:";
		Win_$1000_mail += "SET !ERRORIGNORE YES"+" \n";
		Win_$1000_mail += "SET !TIMEOUT_TAG 0"+" \n";
		Win_$1000_mail += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
		Win_$1000_mail += "SET !DATASOURCE_LINE 1"+" \n";
		Win_$1000_mail += "SET !DATASOURCE_COLUMNS 1"+" \n";
		Win_$1000_mail += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_pregame ATTR=ID:email CONTENT={{!COL1}}"+" \n";
		Win_$1000_mail += "TAG POS=1 TYPE=BUTTON FORM=ID:form_pregame ATTR=ID:submit_pregame"+" \n";
		iimPlay(Win_$1000_mail);
		var capcha = check_capcha();
		if(capcha == true)
		{
			iimPlay(Win_$1000);
			break;
		}
		else
		{
			break;
		}
	}
}
function Find_Family_Support(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Find_Family_Support = "CODE:";
	Find_Family_Support += "SET !ERRORIGNORE YES"+" \n";
	Find_Family_Support += "SET !TIMEOUT_TAG 0"+" \n";
	Find_Family_Support += "SET !DATASOURCE Last_First.txt"+" \n";
	Find_Family_Support += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
	Find_Family_Support += "SET !DATASOURCE_COLUMNS 2 "+" \n";
	Find_Family_Support += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formID ATTR=NAME:firstname CONTENT={{!COL1}}"+" \n";
	Find_Family_Support += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formID ATTR=NAME:lastname CONTENT={{!COL2}}"+" \n";
	Find_Family_Support += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	Find_Family_Support += "SET !DATASOURCE_LINE 1"+" \n";
	Find_Family_Support += "SET !DATASOURCE_COLUMNS 1"+" \n";
	Find_Family_Support += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formID ATTR=NAME:email CONTENT={{!COL1}}"+" \n";
	Find_Family_Support += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formID ATTR=ID:e14 CONTENT={{!COL1}}"+" \n";
	Find_Family_Support += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:formID ATTR=NAME:*"+" \n";
	Find_Family_Support += "WAIT SECONDS = 2"+" \n";
	iimPlay(Find_Family_Support);
	// phần trả lời KS
	if(Check_Off == "43")
	{
		iimPlayCode("TAB T = 2");
	}
	if(Check_Off == "2144")
	{
		var Find_Family_Support_1626 = "CODE:";
		Find_Family_Support_1626 += "SET !ERRORIGNORE YES"+" \n";
		Find_Family_Support_1626 += "SET !TIMEOUT_TAG 0"+" \n";
		Find_Family_Support_1626 += "TAG POS=1 TYPE=A ATTR=TXT:I<SP>Want<SP>to<SP>Rent"+" \n";
		Find_Family_Support_1626 += "TAG POS=1 TYPE=A ATTR=TXT:Good:<SP>700-749"+" \n";
		Find_Family_Support_1626 += "TAG POS=1 TYPE=A ATTR=TXT:YES"+" \n";
		Find_Family_Support_1626 += "TAG POS=1 TYPE=A ATTR=TXT:I<SP>Want<SP>to<SP>Rent<SP>to<SP>Own"+" \n";
		Find_Family_Support_1626 += "TAG POS=1 TYPE=A ATTR=TXT:Fair:<SP>650-699"+" \n";
		Find_Family_Support_1626 += "TAG POS=1 TYPE=A ATTR=TXT:NO"+" \n";
		Find_Family_Support_1626 += "TAG POS=1 TYPE=A ATTR=TXT:I<SP>Want<SP>to<SP>Own/Purchase<SP>a<SP>Home"+" \n";
		iimPlay(Find_Family_Support_1626);
	}
	else
	{
		var Find_Family_Support_KS = "CODE:";
		Find_Family_Support_KS += "SET !ERRORIGNORE YES"+" \n";
		Find_Family_Support_KS += "SET !TIMEOUT_TAG 0"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=IMG ATTR=SRC:http://resourcedepot.info/templates/resourcedepot.info/images/yes-edu.png"+" \n";
		Find_Family_Support_KS += "WAIT SECONDS = 1"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=A ATTR=TXT:YES"+" \n";
		Find_Family_Support_KS += "WAIT SECONDS = 0.5"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=A ATTR=TXT:NO"+" \n";
		Find_Family_Support_KS += "WAIT SECONDS = 0.5"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=A ATTR=TXT:YES"+" \n";
		Find_Family_Support_KS += "WAIT SECONDS = 0.5"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=A ATTR=TXT:NO"+" \n";
		Find_Family_Support_KS += "WAIT SECONDS = 0.5"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=A ATTR=TXT:YES"+" \n";
		Find_Family_Support_KS += "WAIT SECONDS = 0.5"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=A ATTR=TXT:NO"+" \n";
		Find_Family_Support_KS += "WAIT SECONDS = 0.5"+" \n";
		Find_Family_Support_KS += "TAG POS=1 TYPE=A ATTR=TXT:NO"+" \n";
		iimPlay(Find_Family_Support_KS);
	}
	iimPlayCode("WAIT SECONDS = 20");
}
function Share_Your_Freebies(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1975 - 1965 + 1)) + 1965);

	var Share_Your_Freebies = "CODE:";
	Share_Your_Freebies += "SET !ERRORIGNORE YES"+" \n";
	Share_Your_Freebies += "SET !TIMEOUT_TAG 0"+" \n";
	Share_Your_Freebies += "SET !DATASOURCE Last_First.txt"+" \n";
	Share_Your_Freebies += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
	Share_Your_Freebies += "SET !DATASOURCE_COLUMNS 2"+" \n";
	Share_Your_Freebies += 'EVENT TYPE=CLICK SELECTOR="#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-first-name" BUTTON=0'+" \n";
	Share_Your_Freebies += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-first-name" CHARS="{{!COL1}}"'+" \n";
	Share_Your_Freebies += 'EVENT TYPE=CLICK SELECTOR="#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-last-name" BUTTON=0'+" \n";
	Share_Your_Freebies += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-81dfe9a6-361c-4606-95f9-119ffd994f15-last-name" CHARS="{{!COL2}}"'+" \n";
	Share_Your_Freebies += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	Share_Your_Freebies += "SET !DATASOURCE_LINE 1"+" \n";
	Share_Your_Freebies += "SET !DATASOURCE_COLUMNS 1"+" \n";
	Share_Your_Freebies += 'EVENT TYPE=CLICK SELECTOR="#i-input-9af4f79d-c77e-4b69-a975-2b46df37610d-default" BUTTON=0'+" \n";
	Share_Your_Freebies += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-9af4f79d-c77e-4b69-a975-2b46df37610d-default" CHARS="{{!COL1}}"'+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-9a9d8356-5ef8-4f0e-aed4-e1fa700307a2-month CONTENT=%"+Random_Ngay+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-9a9d8356-5ef8-4f0e-aed4-e1fa700307a2-day CONTENT=%"+Random_Thang+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-9a9d8356-5ef8-4f0e-aed4-e1fa700307a2-year CONTENT=%"+Random_Nam+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-aed8d9b3-04f0-42fa-9d8f-2ae196b0aa66-default CONTENT=%460b2f64-e325-4aac-b531-02c3dc4552ca"+" \n";
	Share_Your_Freebies += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	Share_Your_Freebies += "SET !DATASOURCE_LINE 1"+" \n";
	Share_Your_Freebies += "SET !DATASOURCE_COLUMNS 5"+" \n";
	Share_Your_Freebies += 'EVENT TYPE=CLICK SELECTOR="#i-input-e2391395-ae36-45cd-ab79-f1330f00c4ff-default" BUTTON=0'+" \n";
	Share_Your_Freebies += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-e2391395-ae36-45cd-ab79-f1330f00c4ff-default" CHARS="{{!COL1}}"'+" \n";
	Share_Your_Freebies += 'EVENT TYPE=CLICK SELECTOR="#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-address-1" BUTTON=0'+" \n";
	Share_Your_Freebies += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-address-1" CHARS="{{!COL2}}"'+" \n";
	Share_Your_Freebies += 'EVENT TYPE=CLICK SELECTOR="#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-city" BUTTON=0'+" \n";
	Share_Your_Freebies += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-city" CHARS="{{!COL3}}" '+" \n";
	Share_Your_Freebies += 'TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-state CONTENT=%{{!COL4}} '+" \n";
	Share_Your_Freebies += 'EVENT TYPE=CLICK SELECTOR="#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-zip" BUTTON=0'+" \n";
	Share_Your_Freebies += 'EVENTS TYPE=KEYPRESS SELECTOR="#i-input-ec58cc90-9cc1-448a-a95a-f33ed26163a2-zip" CHARS="{{!COL5}}"'+" \n";
	Share_Your_Freebies += "TAG POS=2 TYPE=SPAN ATTR=TXT:"+" \n";
	Share_Your_Freebies += "TAG POS=4 TYPE=SPAN ATTR=TXT:"+" \n";
	Share_Your_Freebies += "TAG POS=6 TYPE=SPAN ATTR=TXT:"+" \n";
	Share_Your_Freebies += "TAG POS=9 TYPE=SPAN ATTR=TXT:"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=1"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:i-316651b8-b3cb-48bb-93b3-6f16675349ad"+" \n";
	Share_Your_Freebies += "SET !TIMEOUT_TAG 30"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=SPAN ATTR=TXT:GET<SP>FREE<SP>SAMPLES<SP>IN<SP>3<SP>EASY<SP>STEPS"+" \n";
	Share_Your_Freebies += "SET !TIMEOUT_TAG 0"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:NO"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:DIRECTV"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5 "+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:Yes"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=LABEL FORM=NAME:NoFormName ATTR=TXT:No"+" \n";
	Share_Your_Freebies += "WAIT SECONDS=0.5"+" \n";
	Share_Your_Freebies += "TAG POS=2 TYPE=SPAN ATTR=TXT:"+" \n";
	Share_Your_Freebies += "TAG POS=1 TYPE=IMG ATTR=SRC:https://djk97zng6lbya.cloudfront.net/2016/08/19/01/09/36/39050a90-a493-4b1c-ae22-e3293075378c.png"+" \n";
	iimPlay(Share_Your_Freebies);
	iimPlayCode("WAIT SECONDS=20");
}
function Free_Offer_for_capcha(File_Mail_info) 
{
	var ERROR_capcha = 0;
	var Pass = Tao_Pass();
	var Free_Offer = "CODE:"; 
	Free_Offer += "SET !ERRORIGNORE YES"+" \n";
	Free_Offer += "SET !TIMEOUT_TAG 60"+" \n";
	Free_Offer += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
	Free_Offer += "SET !TIMEOUT_TAG 0"+" \n";
	Free_Offer += 'SET !VAR1 EVAL("var min = 1; var max =2659; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;")'+" \n";
	Free_Offer += "SET !DATASOURCE Last_First.txt"+" \n";
	Free_Offer += "SET !DATASOURCE_LINE {{!VAR1}}"+" \n";
	Free_Offer += "SET !DATASOURCE_COLUMNS 2"+" \n";
	Free_Offer += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:freeoffer ATTR=NAME:firstname CONTENT={{!COL1}}"+" \n";
	Free_Offer += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:freeoffer ATTR=NAME:lastname CONTENT={{!COL2}}"+" \n";
	Free_Offer += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	Free_Offer += "SET !DATASOURCE_LINE 1"+" \n";
	Free_Offer += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:freeoffer ATTR=ID:emailaddress CONTENT={{!COL1}}"+" \n";
	Free_Offer += "SET !ENCRYPTION NO"+" \n";
	Free_Offer += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:freeoffer ATTR=ID:custpassword CONTENT="+Pass+" \n";
	Free_Offer += "WAIT SECONDS = 1"+" \n";
	Free_Offer += 'EVENT TYPE=CLICK SELECTOR="#offer_section>FORM>DIV:nth-of-type(5)>DIV>INPUT" BUTTON=0'+" \n";
	Free_Offer += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:freeoffer ATTR=NAME:Action"+" \n";
	Free_Offer += "WAIT SECONDS = 15"+" \n";
	////////
	var Free_Offer_KO_capcha = "CODE:"; 
	Free_Offer_KO_capcha += "SET !ERRORIGNORE YES"+" \n";
	Free_Offer_KO_capcha += "SET !TIMEOUT_TAG 0"+" \n";
	Free_Offer_KO_capcha += 'SET !VAR1 EVAL("var min = 1; var max =2659; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;")'+" \n";
	Free_Offer_KO_capcha += "SET !DATASOURCE Last_First.txt"+" \n";
	Free_Offer_KO_capcha += "SET !DATASOURCE_LINE {{!VAR1}}"+" \n";
	Free_Offer_KO_capcha += "SET !DATASOURCE_COLUMNS 2"+" \n";
	Free_Offer_KO_capcha += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:freeoffer ATTR=NAME:firstname CONTENT={{!COL1}}"+" \n";
	Free_Offer_KO_capcha += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:freeoffer ATTR=NAME:lastname CONTENT={{!COL2}}"+" \n";
	Free_Offer_KO_capcha += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	Free_Offer_KO_capcha += "SET !DATASOURCE_LINE 1"+" \n";
	Free_Offer_KO_capcha += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:freeoffer ATTR=ID:emailaddress CONTENT={{!COL1}}"+" \n";
	Free_Offer_KO_capcha += "SET !ENCRYPTION NO"+" \n";
	Free_Offer_KO_capcha += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:freeoffer ATTR=ID:custpassword CONTENT="+Pass+" \n";
	Free_Offer_KO_capcha += "WAIT SECONDS = 1"+" \n";
	Free_Offer_KO_capcha += 'EVENT TYPE=CLICK SELECTOR="#offer_section>FORM>DIV:nth-of-type(5)>DIV>INPUT" BUTTON=0'+" \n";
	Free_Offer_KO_capcha += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:freeoffer ATTR=NAME:Action"+" \n";
	Free_Offer_KO_capcha += "WAIT SECONDS = 15"+" \n";
	if(Check_Off == "2423")
	{// không capcha
		iimPlay(Free_Offer_KO_capcha);
	}
	else
	{// có capcha
		while(true)
		{
			var capcha = check_capcha();
			if(capcha == true)
			{
				iimPlay(Free_Offer);
				break;
			}
			else
			{
				ERROR_capcha++;
				iimDisplay("Lỗi Duyệt captcha");
				iimPlay(REFRESH_Site);
				if(ERROR_capcha > 2)
				{
					break;
				}
			}
		}
	}
}
function National_Consumer_Center(File_Mail_info) // National_Consumer_Center
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);	
	switch(Check_Off)
	{// bước quay thưởng
		case "202":
		var National_Quay = "CODE:";
		National_Quay += "SET !ERRORIGNORE YES"+"\n";
		National_Quay += "SET !TIMEOUT_TAG 0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal01>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
		// National_Quay += "WAIT SECONDS=7"+"\n";
		// National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal02>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
		// National_Quay += "WAIT SECONDS=7"+"\n";
		// National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal03>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
		National_Quay += "WAIT SECONDS=5"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q1>SPAN\" BUTTON=0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q2>SPAN\" BUTTON=0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q3>SPAN\" BUTTON=0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q4>SPAN\" BUTTON=0"+"\n";
		National_Quay += "WAIT SECONDS=10"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#v4>TABLE>TBODY>TR:nth-of-type(2)>TD:nth-of-type(2)>A:nth-of-type(2)>DIV\" BUTTON=0"+"\n";
		iimPlay(National_Quay);
		break;
	}
	switch(Check_Off)
	{// click vào hình mặt cười
		case "455":case "437":case "400":
		case "357":case "320":case "316":case "314":case "313":case "261":case "146":case "169":case "163":case "162":
		var National_reward = "CODE:";
		National_reward += "SET !ERRORIGNORE YES"+"\n";
		National_reward += "SET !TIMEOUT_TAG 30"+"\n";
		National_reward += "EVENT TYPE=CLICK SELECTOR=\"#reward\" BUTTON=0"+"\n";
		iimPlay(National_reward);
		break;
	}
	switch(Check_Off)
	{// click chọn yes no với sảng phẩm
		case "434":case "433":case "426":case "427":case "428":
		var National_1 = "CODE:";
		National_1 += "SET !ERRORIGNORE YES"+"\n";
		National_1 += "SET !TIMEOUT_TAG 0"+"\n";
		National_1 += "TAG POS=2 TYPE=DIV ATTR=TXT:YES"+" \n";
		National_1 += "WAIT SECONDS=0.5"+" \n";
		National_1 += "TAG POS=1 TYPE=DIV ATTR=ID:ytta"+" \n";
		National_1 += "WAIT SECONDS=0.5"+" \n";
		National_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:26-35"+" \n";
		National_1 += "WAIT SECONDS=0.5"+" \n";
		National_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:7-10"+" \n";
		National_1 += "WAIT SECONDS=5"+" \n";
		iimPlay(National_1);
		break;
		case "429":
		var chon_Cau = Math.floor((Math.random() * 4) + 1);
		var National_4choice = "CODE:";
		National_4choice += "SET !ERRORIGNORE YES"+"\n";
		National_4choice += "SET !TIMEOUT_TAG 30"+"\n";
		National_4choice += "TAG POS=1 TYPE=DIV ATTR=ID:4choice"+chon_Cau+" \n";
		National_4choice += "WAIT SECONDS=5"+" \n";
		iimPlay(National_4choice);
		break;
	}
	var National = "CODE:";
	National += "SET !ERRORIGNORE YES"+" \n";
	National += "SET !TIMEOUT_TAG 0"+" \n";
	National += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	National += "SET !DATASOURCE_LINE 1"+" \n";
	National += "SET !DATASOURCE_COLUMNS 1"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:em CONTENT={{!COL1}}"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=NAME:email CONTENT={{!COL1}}"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=ID:submitbtn"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=ID:rcsbt"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National += "SET !DATASOURCE Last_First.txt"+" \n";
	National += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
	National += "SET !DATASOURCE_COLUMNS 2"+" \n";
	National += "WAIT SECONDS=10"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:fn CONTENT={{!COL1}}"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ln CONTENT={{!COL2}}"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	National += "SET !DATASOURCE_LINE 1"+" \n";
	National += "SET !DATASOURCE_COLUMNS 5 "+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ad CONTENT={{!COL2}}"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:zp CONTENT={{!COL5}}"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+" \n";
	National += "WAIT SECONDS=1"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ad CONTENT={{!COL2}}"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:CELLAREA CONTENT=520"+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell2 CONTENT="+Random_Phon1+" \n";
	National += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell3 CONTENT="+Random_Phon2+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National += "WAIT SECONDS=1"+" \n";
	National += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobmonth CONTENT=%0"+Random_Ngay+" \n";
	National += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobday CONTENT=%0"+Random_Thang+" \n";
	National += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:DOBYEAR CONTENT=%"+Random_Nam+" \n";
	National += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:FlowSQForm ATTR=ID:chkboxn CONTENT=YES"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:SUBMIT"+" \n";
	National += "SET !TIMEOUT_TAG 30"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=ID:hfcta"+" \n";	
	iimPlay(National);
	// Check and Làm Khảo Sát
	var str = window.document.body.textContent;
	if(str.indexOf("100 points"))
	{
		var National_KS = "CODE:";
		National_KS += "SET !ERRORIGNORE YES"+"\n";
		National_KS += "SET !TIMEOUT_TAG 0"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:The<SP>food"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid165339"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Health/Advice"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174569"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2<SP>children"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174659"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2-5<SP>years"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174789"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Moving<SP>/<SP>Just<SP>Moved"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174509 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52689"+"\n";
		National_KS += "TAG POS=2 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid177549"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Today"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid162949"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Cigars"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid157959"+"\n";
		National_KS += "TAG POS=7 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147381"+"\n";
		National_KS += "TAG POS=10 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid113381"+"\n";
		National_KS += "TAG POS=13 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid135781"+"\n";
		National_KS += "TAG POS=14 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid163169"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:New<SP>Windows"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid175229 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52869"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:DirecTV"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid111001"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Student"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid171149"+"\n";
		National_KS += "TAG POS=16 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid156141"+"\n";
		National_KS += "TAG POS=17 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid155501"+"\n";
		National_KS += "TAG POS=18 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147401"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Democrat"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid30071"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid77921"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes,<SP>Life<SP>Insurance"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174469 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid51059"+"\n";
		National_KS += "TAG POS=29 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid143831"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:confirmbox"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:cb CONTENT=YES"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:tcpaSubBtn"+"\n";
		National_KS += "WAIT SECONDS=5"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=TXT:No,<SP>thanks"+"\n";
		National_KS += "TAG POS=1 TYPE=TD ATTR=TXT:No,<SP>I'm<SP>already<SP>rich"+"\n";
		National_KS += "WAIT SECONDS=20"+"\n";
		iimPlay(National_KS); 
	}
}
function Step_1(File_Mail_info)                  // Step_1
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);	
	switch(Check_Off)
	{//
		case "404":
		var sweepstakesamonth_Mail = "CODE:";
		sweepstakesamonth_Mail += "SET !ERRORIGNORE YES"+"\n";
		sweepstakesamonth_Mail += "SET !TIMEOUT_TAG 0"+"\n";
		sweepstakesamonth_Mail += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
		sweepstakesamonth_Mail += "SET !DATASOURCE_LINE 1"+"\n";
		sweepstakesamonth_Mail += "SET !DATASOURCE_COLUMNS 1"+"\n";
		// sweepstakesamonth_Mail += "FRAME F=1"+"\n";
		sweepstakesamonth_Mail += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:firstname CONTENT={{!COL1}}"+"\n";
		sweepstakesamonth_Mail += "TAG POS=1 TYPE=SPAN ATTR=ID:submit-text"+"\n";
		sweepstakesamonth_Mail += "WAIT SECONDS=10"+"\n";
		iimPlay(sweepstakesamonth_Mail);
		var sweepstakesamonth = "CODE:";
		sweepstakesamonth += "SET !ERRORIGNORE YES"+"\n";
		sweepstakesamonth += "SET !TIMEOUT_TAG 0"+"\n";
		sweepstakesamonth += "SET !DATASOURCE Last_First.txt"+"\n";
		sweepstakesamonth += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
		sweepstakesamonth += "SET !DATASOURCE_COLUMNS 2  "+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:firstname CONTENT={{!COL1}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:lastname CONTENT={{!COL2}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SPAN ATTR=TXT:CONTINUE"+"\n";
		sweepstakesamonth += "WAIT SECONDS=1"+"\n";
		sweepstakesamonth += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
		sweepstakesamonth += "SET !DATASOURCE_LINE 1"+"\n";
		sweepstakesamonth += "SET !DATASOURCE_COLUMNS 5"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:address CONTENT={{!COL2}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:FlowSQForm ATTR=ID:telephone CONTENT={{!COL1}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SPAN ATTR=TXT:CONTINUE"+"\n";
		sweepstakesamonth += "WAIT SECONDS=1"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:birthmonth CONTENT=%0"+Random_Ngay+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:birthday CONTENT=%0"+Random_Thang+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:birthyear CONTENT=%"+Random_Nam+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:FlowSQForm ATTR=ID:iAgree-Checkbox CONTENT=YES"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SPAN ATTR=TXT:ENTER<SP>TO<SP>WIN"+"\n";
		sweepstakesamonth += "WAIT SECONDS=10"+"\n";
		iimPlay(sweepstakesamonth);
		break;
		
	}
	switch(Check_Off)
	{// FRAME F=1
		case "491":case "319":
		var sweepstakesamonth_Mail = "CODE:";
		sweepstakesamonth_Mail += "SET !ERRORIGNORE YES"+"\n";
		sweepstakesamonth_Mail += "SET !TIMEOUT_TAG 0"+"\n";
		sweepstakesamonth_Mail += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
		sweepstakesamonth_Mail += "SET !DATASOURCE_LINE 1"+"\n";
		sweepstakesamonth_Mail += "SET !DATASOURCE_COLUMNS 1"+"\n";
		sweepstakesamonth_Mail += "FRAME F=1"+"\n";
		sweepstakesamonth_Mail += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:firstname CONTENT={{!COL1}}"+"\n";
		sweepstakesamonth_Mail += "TAG POS=1 TYPE=SPAN ATTR=ID:submit-text"+"\n";
		sweepstakesamonth_Mail += "WAIT SECONDS=10"+"\n";
		iimPlay(sweepstakesamonth_Mail);
		var sweepstakesamonth = "CODE:";
		sweepstakesamonth += "SET !ERRORIGNORE YES"+"\n";
		sweepstakesamonth += "SET !TIMEOUT_TAG 0"+"\n";
		sweepstakesamonth += "SET !DATASOURCE Last_First.txt"+"\n";
		sweepstakesamonth += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
		sweepstakesamonth += "SET !DATASOURCE_COLUMNS 2  "+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:firstname CONTENT={{!COL1}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:lastname CONTENT={{!COL2}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SPAN ATTR=TXT:CONTINUE"+"\n";
		sweepstakesamonth += "WAIT SECONDS=1"+"\n";
		sweepstakesamonth += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
		sweepstakesamonth += "SET !DATASOURCE_LINE 1"+"\n";
		sweepstakesamonth += "SET !DATASOURCE_COLUMNS 5"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:address CONTENT={{!COL2}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:FlowSQForm ATTR=ID:telephone CONTENT={{!COL1}}"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SPAN ATTR=TXT:CONTINUE"+"\n";
		sweepstakesamonth += "WAIT SECONDS=1"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:birthmonth CONTENT=%0"+Random_Ngay+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:birthday CONTENT=%0"+Random_Thang+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:birthyear CONTENT=%"+Random_Nam+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:FlowSQForm ATTR=ID:iAgree-Checkbox CONTENT=YES"+"\n";
		sweepstakesamonth += "TAG POS=1 TYPE=SPAN ATTR=TXT:ENTER<SP>TO<SP>WIN"+"\n";
		sweepstakesamonth += "WAIT SECONDS=10"+"\n";
		iimPlay(sweepstakesamonth);
		break;
	}
	var str = window.document.body.textContent;
	if(str.indexOf("Take Survey"))
	{// KS
		var National_KS = "CODE:";
		National_KS += "SET !ERRORIGNORE YES"+"\n";
		National_KS += "SET !TIMEOUT_TAG 0"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:The<SP>food"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid165339"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Health/Advice"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174569"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2<SP>children"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174659"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2-5<SP>years"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174789"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Moving<SP>/<SP>Just<SP>Moved"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174509 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52689"+"\n";
		National_KS += "TAG POS=2 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid177549"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Today"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid162949"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Cigars"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid157959"+"\n";
		National_KS += "TAG POS=7 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147381"+"\n";
		National_KS += "TAG POS=10 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid113381"+"\n";
		National_KS += "TAG POS=13 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid135781"+"\n";
		National_KS += "TAG POS=14 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid163169"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:New<SP>Windows"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid175229 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52869"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:DirecTV"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid111001"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Student"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid171149"+"\n";
		National_KS += "TAG POS=16 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid156141"+"\n";
		National_KS += "TAG POS=17 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid155501"+"\n";
		National_KS += "TAG POS=18 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147401"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Democrat"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid30071"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid77921"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes,<SP>Life<SP>Insurance"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174469 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid51059"+"\n";
		National_KS += "TAG POS=29 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid143831"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:confirmbox"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:cb CONTENT=YES"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:tcpaSubBtn"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=TXT:No,<SP>thanks"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=TXT:No,<SP>thanks"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=TD ATTR=TXT:No,<SP>I'm<SP>already<SP>rich"+"\n";
		National_KS += "WAIT SECONDS=15"+"\n";
		iimPlay(National_KS); 
	}
}
function National_FRAME_1(File_Mail_info)       // National_FRAME_1
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);		
	switch(Check_Off)
	{// click vào hình mặt cười
		case "0":
		var National_reward = "CODE:";
		National_reward += "SET !ERRORIGNORE YES"+"\n";
		National_reward += "SET !TIMEOUT_TAG 30"+"\n";
		National_reward += "FRAME F=1"+"\n";
		National_reward += "EVENT TYPE=CLICK SELECTOR=\"#reward\" BUTTON=0"+"\n";
		iimPlay(National_reward);
		break;
	}
	var National_FRAME_1 = "CODE:";
	National_FRAME_1 += "SET !ERRORIGNORE YES"+" \n";
	National_FRAME_1 += "SET !TIMEOUT_TAG 0"+" \n";
	National_FRAME_1 += "FRAME F=1"+" \n";
	// National_FRAME_1 += "TAG POS=2 TYPE=DIV ATTR=TXT:YES"+" \n";
	// National_FRAME_1 += "WAIT SECONDS=0.5"+" \n";
	// National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:ytta"+" \n";
	// National_FRAME_1 += "WAIT SECONDS=0.5"+" \n";
	// National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:26-35"+" \n";
	// National_FRAME_1 += "WAIT SECONDS=0.5"+" \n";
	// National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:7-10"+" \n";
	// National_FRAME_1 += "WAIT SECONDS=10"+" \n";
	National_FRAME_1 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	National_FRAME_1 += "SET !DATASOURCE_LINE 1"+" \n";
	National_FRAME_1 += "SET !DATASOURCE_COLUMNS 1"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:em CONTENT={{!COL1}}"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=NAME:email CONTENT={{!COL1}}"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:submitbtn"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:rcsbt"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National_FRAME_1 += "SET !DATASOURCE Last_First.txt"+" \n";
	National_FRAME_1 += "SET !DATASOURCE_LINE "+Random_Ten_Ho+" \n";
	National_FRAME_1 += "SET !DATASOURCE_COLUMNS 2"+" \n";
	National_FRAME_1 += "WAIT SECONDS=10"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:fn CONTENT={{!COL1}}"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ln CONTENT={{!COL2}}"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National_FRAME_1 += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	National_FRAME_1 += "SET !DATASOURCE_LINE 1"+" \n";
	National_FRAME_1 += "SET !DATASOURCE_COLUMNS 5 "+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ad CONTENT={{!COL2}}"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:zp CONTENT={{!COL5}}"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+" \n";
	National_FRAME_1 += "WAIT SECONDS=1"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ad CONTENT={{!COL2}}"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:CELLAREA CONTENT=520"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell2 CONTENT="+Random_Phon1+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell3 CONTENT="+Random_Phon2+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue"+" \n";
	National_FRAME_1 += "WAIT SECONDS=1"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobmonth CONTENT=%0"+Random_Ngay+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobday CONTENT=%0"+Random_Thang+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:DOBYEAR CONTENT=%"+Random_Nam+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:FlowSQForm ATTR=ID:chkboxn CONTENT=YES"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:SUBMIT"+" \n";
	National_FRAME_1 += "SET !TIMEOUT_TAG 30"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:hfcta"+" \n";
	iimPlay(National_FRAME_1);
	var str = window.document.body.textContent;
	if(str.indexOf("100 points"))
	{// Làm Khảo Sát
		var National_KS = "CODE:";
		National_KS += "SET !ERRORIGNORE YES"+"\n";
		National_KS += "SET !TIMEOUT_TAG 0"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:The<SP>food"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid165339"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Health/Advice"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174569"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2<SP>children"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174659"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2-5<SP>years"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174789"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Moving<SP>/<SP>Just<SP>Moved"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174509 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52689"+"\n";
		National_KS += "TAG POS=2 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid177549"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Today"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid162949"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Cigars"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid157959"+"\n";
		National_KS += "TAG POS=7 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147381"+"\n";
		National_KS += "TAG POS=10 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid113381"+"\n";
		National_KS += "TAG POS=13 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid135781"+"\n";
		National_KS += "TAG POS=14 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid163169"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:New<SP>Windows"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid175229 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52869"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:DirecTV"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid111001"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Student"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid171149"+"\n";
		National_KS += "TAG POS=16 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid156141"+"\n";
		National_KS += "TAG POS=17 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid155501"+"\n";
		National_KS += "TAG POS=18 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147401"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Democrat"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid30071"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid77921"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes,<SP>Life<SP>Insurance"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174469 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid51059"+"\n";
		National_KS += "TAG POS=29 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid143831"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:confirmbox"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:cb CONTENT=YES"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:tcpaSubBtn"+"\n";
		National_KS += "WAIT SECONDS=5"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=TXT:No,<SP>thanks"+"\n";
		National_KS += "TAG POS=1 TYPE=TD ATTR=TXT:No,<SP>I'm<SP>already<SP>rich"+"\n";
		National_KS += "WAIT SECONDS=30"+"\n";
		iimPlay(National_KS);
	}
}
function Nationaldigitalsurvey(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Nationaldigitalsurvey = "CODE:";
	Nationaldigitalsurvey += "SET !ERRORIGNORE YES"+"\n";
	Nationaldigitalsurvey += "SET !TIMEOUT_TAG 0"+"\n";
	Nationaldigitalsurvey += "EVENT TYPE=CLICK SELECTOR=\"#yes\" BUTTON=0"+"\n";
	Nationaldigitalsurvey += "EVENT TYPE=CLICK SELECTOR=\"#btn2-25\" BUTTON=0"+"\n";
	Nationaldigitalsurvey += "EVENT TYPE=CLICK SELECTOR=\"#btn3-7\" BUTTON=0"+"\n";
	Nationaldigitalsurvey += "WAIT SECONDS=5"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE Last_First.txt"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formEmail ATTR=ID:fname CONTENT={{!COL1}}"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formEmail ATTR=ID:lname CONTENT={{!COL2}}"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE_LINE 1"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE_COLUMNS 1 "+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:formEmail ATTR=ID:email CONTENT={{!COL1}}"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=LABEL FORM=ID:formEmail ATTR=TXT:"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:formEmail ATTR=ID:disclaimerP CONTENT=YES"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=BUTTON FORM=ID:formEmail ATTR=ID:btn4"+"\n";
	Nationaldigitalsurvey += "WAIT SECONDS=3"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE_LINE 1"+"\n";
	Nationaldigitalsurvey += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formCongratulations ATTR=ID:address CONTENT={{!COL2}}"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:formCongratulations ATTR=ID:city CONTENT={{!COL3}}"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=SELECT FORM=ID:formCongratulations ATTR=ID:state CONTENT=%{{!COL4}}"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:formCongratulations ATTR=ID:zip CONTENT={{!COL5}}"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:formCongratulations ATTR=ID:phone CONTENT={{!COL1}}"+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=SELECT FORM=ID:formCongratulations ATTR=NAME:pse_1324_dob_month_digit CONTENT=%"+Random_Ngay+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=SELECT FORM=ID:formCongratulations ATTR=NAME:pse_1324_dob_day CONTENT=%"+Random_Thang+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=SELECT FORM=ID:formCongratulations ATTR=NAME:pse_1324_dob_year CONTENT=%"+Random_Nam+"\n";
	Nationaldigitalsurvey += "TAG POS=1 TYPE=BUTTON FORM=ID:formCongratulations ATTR=ID:btn4"+"\n";
	Nationaldigitalsurvey += "WAIT SECONDS=5"+"\n";
	iimPlay(Nationaldigitalsurvey);
	var str = window.document.body.textContent;
	if(str.indexOf("Take Survey"))
	{
		var Nationaldigitalsurvey_KS = "CODE:";
		Nationaldigitalsurvey_KS += "SET !ERRORIGNORE YES"+"\n";
		Nationaldigitalsurvey_KS += "SET !TIMEOUT_TAG 0"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=DIV ATTR=TXT:Yes"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=ID:no"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:/?session_id=* ATTR=ID:confirm CONTENT=YES"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/?session_id=* ATTR=TXT:Continue"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=BUTTON FORM=ID:ocs_form ATTR=TXT:Skip"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=A ATTR=TXT:No<SP>thanks,<SP>I<SP>don't<SP>feel<SP>like<SP>saving<SP>tod*"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=BUTTON FORM=ID:ocs_form ATTR=TXT:Skip"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/?session_id=ebba53360e1911e8aeefde6294bcc7b7 ATTR=NAME:sub"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/?session_id=ebba53360e1911e8aeefde6294bcc7b7 ATTR=NAME:sub"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/?session_id=ebba53360e1911e8aeefde6294bcc7b7 ATTR=NAME:sub"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=BUTTON FORM=ID:ocs_form ATTR=TXT:Skip"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=1"+"\n";
		Nationaldigitalsurvey_KS += "TAG POS=1 TYPE=IMG ATTR=ID:listing-td-div0-img"+"\n";
		Nationaldigitalsurvey_KS += "WAIT SECONDS=20"+"\n";
		iimPlay(Nationaldigitalsurvey_KS);
	}
}
function NFL(File_Mail_info)
{
	var favoriteTeam = ["NYJ","ATL","CHI","CIN","HOU","IND","WAS","SF","BAL"];
	var Giatri = Math.floor((Math.random() * 3) + 0);
	var Ngay = Math.floor((Math.random() * 9) + 1);
	var Thang = Math.floor((Math.random() * 9) + 1);
	var Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var NFL = "CODE:";
	NFL += "SET !ERRORIGNORE YES"+" \n";
	NFL += "SET !TIMEOUT_TAG 0"+" \n";
	NFL += "TAG POS=1 TYPE=A ATTR=HREF:/registration/leagueDirectory&&CLASS:joinLeague&&TITLE:Join<SP>a<SP>friend's<SP>fantasy<SP>football<SP>league<SP>or<SP>make<SP>new<SP>friends!"+" \n";
	NFL += "TAG POS=1 TYPE=A ATTR=CLASS:button<SP>join&&HREF:/registration/publicleaguejoincreateteam?leagueId=*"+" \n";
	NFL += "TAG POS=1 TYPE=A ATTR=HREF:/registration/autopickcreate&&CLASS:autoPickCreate&&ID:*"+" \n";
	NFL += "WAIT SECONDS=2"+" \n";
	NFL += "REFRESH"+" \n";
	NFL += "SET !TIMEOUT_TAG 30"+" \n";
	NFL += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Register"+" \n";
	NFL += "TAG POS=1 TYPE=LABEL ATTR=TXT:First<SP>Name"+" \n";
	NFL += "SET !TIMEOUT_TAG 0"+" \n";
	NFL += "SET !DATASOURCE Last_First.txt"+" \n";
	NFL += "SET !DATASOURCE_LINE "+Ten_Ho+" \n";
	NFL += "SET !DATASOURCE_COLUMNS 2"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/register ATTR=ID:firstName CONTENT={{!COL1}}"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/register ATTR=ID:lastName CONTENT={{!COL2}}"+" \n";
	NFL += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+" \n";
	NFL += "SET !DATASOURCE_LINE 1"+" \n";
	NFL += "SET !DATASOURCE_COLUMNS 1"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/register ATTR=ID:emailAddress CONTENT={{!COL1}}"+" \n";
	NFL += "SET !VAR1 EVAL(\"var letters = ['a','b','c','d','1','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z']; var string = ''; for(var i = 0; i < 8; i++){string += letters[parseInt(Math.random() * 25)]}; string\")"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/register ATTR=ID:username CONTENT={{!VAR1}}"+" \n";
	NFL += "SET !VAR1 EVAL(\"var letters = ['a','b','c','d','1','e','f','g','h','i','#','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z','#']; var string = ''; for(var i = 0; i < 10; i++){string += letters[parseInt(Math.random() * 25)]}; string\")"+" \n";
	NFL += "SET !ENCRYPTION NO"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/register ATTR=ID:password CONTENT={{!VAR1}}"+" \n";
	NFL += "TAG POS=1 TYPE=SELECT FORM=ACTION:/register ATTR=NAME:birthMonth CONTENT=%"+Ngay+" \n";
	NFL += "TAG POS=1 TYPE=SELECT FORM=ACTION:/register ATTR=NAME:birthDay CONTENT=%"+Thang+" \n";
	NFL += "TAG POS=1 TYPE=SELECT FORM=ACTION:/register ATTR=NAME:birthYear CONTENT=%"+Nam+" \n";
	NFL += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+" \n";
	NFL += "SET !DATASOURCE_LINE 1"+" \n";
	NFL += "SET !DATASOURCE_COLUMNS 5"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/register ATTR=ID:zip CONTENT={{!COL5}} "+" \n";
	NFL += "TAG POS=1 TYPE=SELECT FORM=ACTION:/register ATTR=NAME:favoriteTeam CONTENT=%"+favoriteTeam[Giatri]+" \n";
	NFL += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/register ATTR=NAME:register"+" \n";
	NFL += "SET !TIMEOUT_TAG 30"+" \n";
	NFL += "TAG POS=1 TYPE=SPAN ATTR=CLASS:text&&ID:*"+" \n";
	NFL += "TAG POS=1 TYPE=A ATTR=HREF:/registration/privateleaguecreate&&CLASS:createLeague&&TITLE:Run<SP>your<SP>own<SP>Fantasy<SP>Football<SP>league!&&ID:*"+" \n";
	NFL += "SET !TIMEOUT_TAG 0"+" \n";
	NFL += "SET !DATASOURCE Last_First.txt"+" \n";
	NFL += "SET !DATASOURCE_LINE "+Ten_Ho+" \n";
	NFL += "SET !DATASOURCE_COLUMNS 2"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:* ATTR=CLASS:text&&ID:leagueName&&MAXLENGTH:20&&NAME:leagueName&&VALUE:&&TYPE:text CONTENT={{!COL1}}"+" \n";
	NFL += "SET !VAR1 EVAL(\"var letters = ['a','b','c','d','1','e','1','2','3','4','5','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z']; var string = ''; for(var i = 0; i < 10; i++){string += letters[parseInt(Math.random() * 25)]}; string\")"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:* ATTR=CLASS:text&&ID:leaguePassword&&NAME:leaguePassword&&VALUE:&&TYPE:text CONTENT={{!VAR1}}"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:* ATTR=CLASS:checkbox&&ID:preactivate-1&&NAME:preactivate&&VALUE:1&&TYPE:checkbox CONTENT=YES"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:* ATTR=CLASS:checkbox&&ID:viewable-1&&NAME:viewable&&VALUE:1&&TYPE:checkbox CONTENT=YES"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:* ATTR=CLASS:text&&ID:teamName&&MAXLENGTH:30&&NAME:teamName&&VALUE:&&TYPE:text CONTENT={{!VAR1}}"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:* ATTR=CLASS:checkbox&&ID:optInId-9&&NAME:optInId[]&&VALUE:9&&TYPE:checkbox CONTENT=YES"+" \n";
	NFL += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:* ATTR=CLASS:submit&&NAME:jSubmit&&VALUE:Create<SP>My<SP>League&&ID:*&&TYPE:submit"+" \n";
	iimPlay(NFL);
	iimPlayCode("WAIT SECONDS=10");
}
function Local_Rent_to_Own_Homes(File_Mail_info)
{
	var ERROR_capcha = 0;
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Local_Rent_to_Own_Homes = "CODE:";
	Local_Rent_to_Own_Homes += "SET !ERRORIGNORE YES"+"\n";
	Local_Rent_to_Own_Homes += "SET !TIMEOUT_TAG 0 "+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE Last_First.txt"+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE_COLUMNS 2  "+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=2 TYPE=A ATTR=TXT:Browse<SP>Home<SP>Listings"+"\n";
	Local_Rent_to_Own_Homes += "WAIT SECONDS = 1"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-first-name CONTENT={{!COL1}}"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-last-name CONTENT={{!COL2}}"+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE_LINE 1"+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-email-address CONTENT={{!COL1}}"+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE_LINE 1"+"\n";
	Local_Rent_to_Own_Homes += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-phone-number CONTENT={{!COL1}}"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=LABEL FORM=ID:webform-client-form-40 ATTR=TXT:No"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-tax-2"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=2 TYPE=LABEL FORM=ID:webform-client-form-40 ATTR=TXT:Yes"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-slc-1"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=3 TYPE=LABEL FORM=ID:webform-client-form-40 ATTR=TXT:No"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-personalloan-2"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=4 TYPE=LABEL FORM=ID:webform-client-form-40 ATTR=TXT:No"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-creditrepair-2"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=5 TYPE=LABEL FORM=ID:webform-client-form-40 ATTR=TXT:Yes"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-refi-1"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=LABEL FORM=ID:webform-client-form-40 ATTR=TXT:I<SP>agree<SP>to<SP>the<SP>Terms<SP>of<SP>Service"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:webform-client-form-40 ATTR=ID:edit-submitted-tcpa-1"+"\n";
	Local_Rent_to_Own_Homes += "TAG POS=1 TYPE=BUTTON FORM=ID:webform-client-form-40 ATTR=NAME:op"+"\n";
	Local_Rent_to_Own_Homes += "WAIT SECONDS = 2"+"\n";
	iimPlay(Local_Rent_to_Own_Homes);
	while(true)
	{
		var capcha = check_capcha();
		if(capcha == true)
		{
			var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
			var Local_Rent_to_Own_Homes_Capcha = "CODE:";
			Local_Rent_to_Own_Homes_Capcha += "SET !ERRORIGNORE YES"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !TIMEOUT_TAG 80 "+"\n";
			Local_Rent_to_Own_Homes_Capcha += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !TIMEOUT_TAG 0 "+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !DATASOURCE Last_First.txt"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !DATASOURCE_LINE "+Ten_Ho+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !DATASOURCE_COLUMNS 2"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:user-register-form ATTR=ID:edit-name CONTENT={{!COL1}}{{!COL2}}"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !DATASOURCE_LINE 1"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !DATASOURCE_COLUMNS 1"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:user-register-form ATTR=ID:edit-mail CONTENT={{!COL1}}"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "SET !ENCRYPTION NO"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:user-register-form ATTR=ID:edit-pass-pass1 CONTENT=@Hjuhddd1"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:user-register-form ATTR=ID:edit-pass-pass2 CONTENT=@Hjuhddd1"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "TAG POS=1 TYPE=BUTTON FORM=ID:user-register-form ATTR=ID:edit-submit"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "WAIT SECONDS = 1"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "TAG POS=1 TYPE=A ATTR=TXT:Browse<SP>Homes"+"\n";
			Local_Rent_to_Own_Homes_Capcha += "WAIT SECONDS = 15"+"\n";
			iimPlay(Local_Rent_to_Own_Homes_Capcha);
			break;
		}
		else
		{
			ERROR_capcha++;
			iimDisplay("Lỗi Duyệt captcha");
			iimPlay(REFRESH_Site);
			if(ERROR_capcha > 2)
			{
				break;
			}
		}
	}
}
function Get_Samples(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon0 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);	
	var Get_Samples = "CODE:";
	Get_Samples += "SET !ERRORIGNORE YES"+"\n";
	Get_Samples += "SET !TIMEOUT_TAG 0 "+"\n";
	Get_Samples += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Get_Samples += "SET !DATASOURCE_LINE 1"+"\n";
	Get_Samples += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Get_Samples += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:em CONTENT={{!COL1}}"+"\n";
	Get_Samples += "TAG POS=1 TYPE=DIV ATTR=ID:subtn"+"\n";
	Get_Samples += "WAIT SECONDS=10"+"\n";
	Get_Samples += "SET !DATASOURCE Last_First.txt"+"\n";
	Get_Samples += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Get_Samples += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Get_Samples += "TAG POS=2 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:fn CONTENT={{!COL1}}"+"\n";
	Get_Samples += "TAG POS=1 TYPE=DIV ATTR=ID:subtn"+"\n";
	Get_Samples += "WAIT SECONDS=1"+"\n";
	Get_Samples += "TAG POS=2 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ln CONTENT={{!COL2}}"+"\n";
	Get_Samples += "TAG POS=1 TYPE=DIV ATTR=ID:subtn"+"\n";
	Get_Samples += "WAIT SECONDS=1"+"\n";
	Get_Samples += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Get_Samples += "SET !DATASOURCE_LINE 1"+"\n";
	Get_Samples += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Get_Samples += "TAG POS=2 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ad CONTENT={{!COL2}}"+"\n";
	Get_Samples += "TAG POS=1 TYPE=DIV ATTR=ID:subtn"+"\n";
	Get_Samples += "WAIT SECONDS=1"+"\n";
	Get_Samples += "TAG POS=1 TYPE=DIV ATTR=ID:subtn"+"\n";
	Get_Samples += "WAIT SECONDS=1"+"\n";
	Get_Samples += "TAG POS=2 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:CELLAREA CONTENT="+Random_Phon0+"\n";
	Get_Samples += "TAG POS=2 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell2 CONTENT="+Random_Phon1+"\n";
	Get_Samples += "TAG POS=2 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell3 CONTENT="+Random_Phon2+"\n";
	Get_Samples += "TAG POS=1 TYPE=DIV ATTR=ID:subtn"+"\n";
	Get_Samples += "WAIT SECONDS=1"+"\n";
	Get_Samples += "TAG POS=2 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobmonth CONTENT=%0"+Random_Ngay+"\n";
	Get_Samples += "TAG POS=2 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobday CONTENT=%0"+Random_Thang+"\n";
	Get_Samples += "TAG POS=2 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:DOBYEAR CONTENT=%"+Random_Nam+"\n";
	Get_Samples += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:FlowSQForm ATTR=ID:chkboxn CONTENT=YES"+"\n";
	Get_Samples += "TAG POS=1 TYPE=DIV ATTR=ID:subtn"+"\n";
	Get_Samples += "WAIT SECONDS=10"+"\n";
	iimPlay(Get_Samples);
	var str = window.document.body.textContent;
	if(str.indexOf("Take Survey"))
	{// KS
		var National_KS = "CODE:";
		National_KS += "SET !ERRORIGNORE YES"+"\n";
		National_KS += "SET !TIMEOUT_TAG 0"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:The<SP>food"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid165339"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Health/Advice"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174569"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2<SP>children"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174659"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2-5<SP>years"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid174789"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Moving<SP>/<SP>Just<SP>Moved"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174509 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52689"+"\n";
		National_KS += "TAG POS=2 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid177549"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Today"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid162949"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Cigars"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid157959"+"\n";
		National_KS += "TAG POS=7 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147381"+"\n";
		National_KS += "TAG POS=10 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid113381"+"\n";
		National_KS += "TAG POS=13 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid135781"+"\n";
		National_KS += "TAG POS=14 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid163169"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:New<SP>Windows"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid175229 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid52869"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:DirecTV"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid111001"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Student"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid171149"+"\n";
		National_KS += "TAG POS=16 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid156141"+"\n";
		National_KS += "TAG POS=17 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid155501"+"\n";
		National_KS += "TAG POS=18 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid147401"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Democrat"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid30071"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:2"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid77921"+"\n";
		National_KS += "TAG POS=1 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:Yes,<SP>Life<SP>Insurance"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:Aid174469 CONTENT=YES"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:btnSubmitQid51059"+"\n";
		National_KS += "TAG POS=29 TYPE=LABEL FORM=ID:RgForm ATTR=TXT:No"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:RgForm ATTR=ID:Aid143831"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:confirmbox"+"\n";
		National_KS += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:RgForm ATTR=ID:cb CONTENT=YES"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=ID:tcpaSubBtn"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=TXT:No,<SP>thanks"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=3"+"\n";
		National_KS += "TAG POS=1 TYPE=DIV ATTR=TXT:No,<SP>thanks"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=A ATTR=ID:skippro"+"\n";
		National_KS += "WAIT SECONDS=1"+"\n";
		National_KS += "TAG POS=1 TYPE=TD ATTR=TXT:No,<SP>I'm<SP>already<SP>rich"+"\n";
		National_KS += "WAIT SECONDS=15"+"\n";
		iimPlay(National_KS); 
	}
}
function Dieting_Solutions(File_Mail_info)                 // Atkins
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Tuoi = Math.floor((Math.random() * 30) + 19);
	var Dieting_Solutions = "CODE:";
	Dieting_Solutions += "SET !ERRORIGNORE YES"+"\n";
	Dieting_Solutions += "SET !TIMEOUT_TAG 0"+"\n";
	Dieting_Solutions += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:offerForm ATTR=NAME:optin"+"\n";
	Dieting_Solutions += "TAG POS=2 TYPE=INPUT:RADIO FORM=ID:offerForm ATTR=NAME:gender"+"\n";
	Dieting_Solutions += "TAG POS=1 TYPE=INPUT:NUMBER FORM=ID:offerForm ATTR=ID:age CONTENT="+Random_Tuoi+"\n";
	Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Continue"+"\n";

	Dieting_Solutions += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
	Dieting_Solutions += "TAG POS=5 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
	Dieting_Solutions += "TAG POS=10 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";

	Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Click<SP>Here<SP>To<SP>Get<SP>Your<SP>Free<SP>Samples"+"\n";
	Dieting_Solutions += "WAIT SECONDS = 3"+"\n";
	Dieting_Solutions += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Dieting_Solutions += "SET !DATASOURCE_LINE 1"+"\n";
	Dieting_Solutions += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Dieting_Solutions += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:offerForm ATTR=NAME:email CONTENT={{!COL1}}"+"\n";
	Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Submit"+"\n";
	Dieting_Solutions += "WAIT SECONDS = 3"+"\n";
	Dieting_Solutions += "EVENT TYPE=CLICK SELECTOR=\"#slot>A>IMG\" BUTTON=0"+"\n";
	iimPlay(Dieting_Solutions);
	iimPlayCode("TAB T=2");
	iimPlayCode("WAIT SECONDS=1");
	var title = window.document.title;
	if(title == "Free Weight Loss Starter Kit Registration | Atkins")
	{
		var Atkins = "CODE:";
		Atkins += "SET !ERRORIGNORE YES"+"\n";
		Atkins += "SET !TIMEOUT_TAG 0"+"\n";
		Atkins += "SET !DATASOURCE Last_First.txt"+"\n";
		Atkins += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
		Atkins += "SET !DATASOURCE_COLUMNS 2"+"\n";
		Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:first_name CONTENT={{!COL1}}"+"\n";
		Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:last_name CONTENT={{!COL2}}"+"\n";
		Atkins += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
		Atkins += "SET !DATASOURCE_LINE 1"+"\n";
		Atkins += "SET !DATASOURCE_COLUMNS 1"+"\n";
		Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email CONTENT={{!COL1}}"+"\n";
		Atkins += "SET !DATASOURCE Last_First.txt"+"\n";
		Atkins += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
		Atkins += "SET !DATASOURCE_COLUMNS 2"+"\n";
		Atkins += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:username CONTENT={{!COL1}}{{!COL2}}"+"\n";
		Atkins += "SET !ENCRYPTION NO"+"\n";
		Atkins += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT=hjuhygtde"+"\n";
		Atkins += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password_confirmation CONTENT=hjuhygtde"+"\n";
		Atkins += "TAG POS=3 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*"+"\n";
		Atkins += "TAG POS=1 TYPE=A ATTR=TXT:Get<SP>Started<SP>»"+"\n";
		Atkins += "WAIT SECONDS = 20"+"\n";
		iimPlay(Atkins);
	}
}
function Samples_Avenue(File_Mail_info)
{
	var New_dong = 1;
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1975 - 1965 + 1)) + 1965);
	var Vouchers_Avenue = "CODE:"; 
	Vouchers_Avenue += "SET !ERRORIGNORE YES" + "\n";
	Vouchers_Avenue += "SET !TIMEOUT_TAG 0" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=LABEL FORM=ID:register_member ATTR=TXT:Ms." + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_gender CONTENT=%0" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Last_First.txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+Random_Ten_Ho + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 2" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_firstname CONTENT={{!COL1}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_lastname CONTENT={{!COL2}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=BUTTON FORM=ID:register_member ATTR=TXT:Continue" + "\n";
	Vouchers_Avenue += "WAIT SECONDS=1" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+New_dong + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 5" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_address CONTENT={{!COL2}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_postal_code CONTENT={{!COL5}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_state CONTENT=%{{!COL4}}" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:register_member ATTR=ID:personal_locality CONTENT={{!COL3}}" + "\n";
	Vouchers_Avenue += "TAG POS=2 TYPE=BUTTON FORM=ID:register_member ATTR=TXT:Continue" + "\n";
	Vouchers_Avenue += "WAIT SECONDS=1" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+New_dong + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 1" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:register_member ATTR=ID:email CONTENT= {{!COL1}}" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt" + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_LINE "+New_dong + "\n";
	Vouchers_Avenue += "SET !DATASOURCE_COLUMNS 5" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:register_member ATTR=ID:personal_phone CONTENT={{!COL1}}" + "\n";
	Vouchers_Avenue += "TAG POS=3 TYPE=BUTTON FORM=ID:register_member ATTR=TXT:Continue" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=LABEL FORM=ID:register_member ATTR=TXT:Yes" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:register_member ATTR=ID:optin_isOptinToNewsletter_0" + "\n";
	Vouchers_Avenue += "WAIT SECONDS=1" + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_birthdate_month CONTENT=%"+Random_Thang + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_birthdate_day CONTENT=%"+Random_Ngay + "\n";
	Vouchers_Avenue += "TAG POS=1 TYPE=SELECT FORM=ID:register_member ATTR=ID:personal_birthdate_year CONTENT=%"+Random_Nam + "\n";
	//
	Vouchers_Avenue += 'EVENT TYPE=CLICK SELECTOR="#registerform-panel>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV:nth-of-type(4)>BUTTON" BUTTON=0' + "\n";
	Vouchers_Avenue += 'EVENT TYPE=CLICK SELECTOR="#registerform-panel>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV:nth-of-type(4)>BUTTON" BUTTON=0' + "\n";
	Vouchers_Avenue += "WAIT SECONDS=30" + "\n";
	iimPlay(Vouchers_Avenue);
}

///////////////////////////////////////////////////
function Tao_Mail() 
{// hàm reg Mail.com
	var User_Pas_Mail = "";
	var SELECT = ["FEMALE","MALE"];
	var Nam_Nu = Math.floor((Math.random() * 1) + 0);
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	iimPlayCode("URL GOTO=https://service.mail.com/registration.html");
	var Mail_com = "CODE:";
	Mail_com += "SET !ERRORIGNORE YES"+"\n";
	Mail_com += "SET !TIMEOUT_TAG 60"+"\n";
	Mail_com += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
	Mail_com += "SET !TIMEOUT_TAG 0"+"\n";
	Mail_com += "SET !DATASOURCE Last_First.txt"+"\n";
	Mail_com += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Mail_com += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Mail_com += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:* ATTR=ID:* CONTENT={{!COL1}}"+"\n";
	Mail_com += "TAG POS=2 TYPE=INPUT:TEXT FORM=ID:* ATTR=ID:* CONTENT={{!COL2}}"+"\n";
	Mail_com += "TAG POS=1 TYPE=SELECT FORM=ID:* ATTR=ID:* CONTENT=%"+SELECT[Nam_Nu]+"\n";
	Mail_com += "TAG POS=2 TYPE=SELECT FORM=ID:* ATTR=ID:* CONTENT=%"+Random_Ngay+"\n";
	Mail_com += "TAG POS=3 TYPE=SELECT FORM=ID:* ATTR=ID:* CONTENT=%0"+Random_Thang+"\n";
	Mail_com += "TAG POS=4 TYPE=SELECT FORM=ID:* ATTR=ID:* CONTENT=%31"+"\n";
	Mail_com += "TAG POS=4 TYPE=INPUT:TEXT FORM=ID:* ATTR=ID:* CONTENT={{!COL1}}{{!COL2}}"+"\n";
	Mail_com += "SET !ENCRYPTION NO"+"\n";
	Mail_com += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:* ATTR=ID:* CONTENT=1Mhujjhn@"+"\n";
	Mail_com += "TAG POS=2 TYPE=INPUT:PASSWORD FORM=ID:* ATTR=ID:* CONTENT=1Mhujjhn@"+"\n";
	Mail_com += "TAG POS=7 TYPE=SELECT FORM=ID:* ATTR=ID:* CONTENT=%0"+"\n";
	Mail_com += "WAIT SECONDS=1"+"\n";
	Mail_com += "TAG POS=6 TYPE=INPUT:TEXT FORM=ID:* ATTR=ID:* CONTENT=Red"+"\n";
	Mail_com += "WAIT SECONDS=3"+"\n";
	Mail_com += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:* ATTR=ID:*"+"\n";
	var check_cap = check_capcha();
	if(check_cap == true)
	{
		iimPlay(Mail_com);
		iimPlayCode("WAIT SECONDS=15");
		var str = window.document.body.textContent;
		if(str.indexOf("Thank you for creating a mail.com email account."))
		{
			var mail = str.match(/([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/gi)
			User_Pas_Mail += mail+","+"1Mhujjhn@";
			// alert();
		}
		else
		{
			alert("Tạo Mail Thất Bại");
		}
	}
	return User_Pas_Mail;
}
function check_capcha()
{
	var capcha = false;
	var Dang_Duyet_CapCha = "CODE:";
	Dang_Duyet_CapCha += "SET !ERRORIGNORE YES" + "\n";
	Dang_Duyet_CapCha += "SET !TIMEOUT_TAG 20" + "\n";
	Dang_Duyet_CapCha += "TAG POS=1 TYPE=A ATTR=TXT:Solving<SP>is<SP>in<SP>process... EXTRACT = TXT" + "\n";
	iimPlay(Dang_Duyet_CapCha);
	var extract =  iimGetExtract();
	if(extract == "Solving is in process...")
	{
		capcha += true;
	}
	return capcha;
}
function Tao_Pass()
{
    var text = "";
    var possible = "@#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
	{
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
    return text;
}
function Tao_Name()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < 8; i++ )
	{
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
    return text;
}
function ClearCookie()
{
	var clearConsoleBrowserHistory = Components.classes["@mozilla.org/browser/nav-history-service;1"]
                                         .getService(Components.interfaces.nsIBrowserHistory);
    const NOW = Date.now() * 1000;
    clearConsoleBrowserHistory.removePagesByTimeframe(NOW - (3600000000 * 60), NOW);
	
	var clearConsoleCookieManager = Components.classes["@mozilla.org/cookiemanager;1"]
                            .getService(Components.interfaces.nsICookieManager);
	clearConsoleCookieManager.removeAll();


	var clearConsoleHttpLoginManager = Components.classes["@mozilla.org/network/http-auth-manager;1"].getService(Components.interfaces.nsIHttpAuthManager);
    clearConsoleHttpLoginManager.clearAll();

	var clearConsoleCacheManager = Components.classes["@mozilla.org/netwerk/cache-storage-service;1"].getService(Components.interfaces.nsICacheStorageService);
	try 
	{
        clearConsoleCacheManager.clear();
    } catch(exception) {}
	
    var clearConsoleimageCacheManager = Components.classes["@mozilla.org/image/cache;1"].getService(Components.interfaces.imgICache);
    try 
	{
        clearConsoleimageCacheManager.clearCache(false); // true=chrome, false=content
    } catch(exception) {}
			
    var clearConsoleAppCacheStorage = Components.classes["@mozilla.org/netwerk/cache-storage-service;1"]
                                                        .getService(Components.interfaces.nsICacheStorageService);
    try 
	{
        clearConsoleAppCacheStorage.asyncEvictStorage(null);
    } catch(exception) {}
			
	var clearConsoleCacheManager = Components.classes["@mozilla.org/network/cache-service;1"].getService(Components.interfaces.nsICacheService);
    try 
	{
        clearConsoleCacheManager.evictEntries(Components.interfaces.nsICache.STORE_ON_DISK);
        clearConsoleCacheManager.evictEntries(Components.interfaces.nsICache.STORE_IN_MEMORY);
        clearConsoleCacheManager.evictEntries(Components.interfaces.nsICache.STORE_OFFLINE);
    } catch(exception) {}
	
    var learConsoleimageCacheManager = Components.classes["@mozilla.org/image/cache;1"].getService(Components.interfaces.imgICache);
    try 
	{
        learConsoleimageCacheManager.clearCache(false); // true=chrome, false=content
    } catch(exception) {}
}
function loginCookie()
{
	try
	{
		var thongtincookie = "www.google.com=DV=swu1E5LDeeIU0PXn5VxrPeL1BsvzFBY;.google.com=OGPC=845686784-5:;.google.com=__utmx=173272373.NsRgTn8iQf-MYLOX8BH_qA$0:;.google.com=__utmxx=173272373.NsRgTn8iQf-MYLOX8BH_qA$0:1517366369:8035200;.google.com=__utma=173272373.1109772875.1517366376.1517366376.1517366376.1;.google.com=__utmc=173272373;.google.com=__utmz=173272373.1517366376.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none);.google.com=__utmt=1;.google.com=__utmb=173272373.1.10.1517366376;mail.google.com=COMPASS=gmail=CooBAAlriVfEdOHzooWA7fjQU8tX_6z6T-YACuxhLGvn79vtEUD4hwO3UkxBXwnkM5JrpWaR2vnIFmPfJyiCyQuaMDht5D2gqP08XcBZnGLDmeneZyiyq4gaZPjZ9T-yk57T14FVkK2IHdNr0hu50K-PkLxu7SyNx0mt4OtcDBKr7SajxvGCutLN7a5QEO2ZytMFGpMBAAlriVdJCbyb3HUPMe7Sy7kDnYuIhW9vl9GDQypolx4Fza8I-uLytS198Z9fRvXvxnEYTA88j0bfry22BBtmH0Yrzo-gdiEHlhj-bqtdKSAv8_u7fz-GSF3RKM47r_e5veLHUSAr8oBj8g4gG9KaEEojq056FifWaGr6BQqFUsTzBaPGl1G-gPG3m5G3Mdglu9Xh;.google.com=SID=twUnZ3PCmvF_RvEFL2CJgdOd1ZuwHrV3ZRXukjdLJ9L8YMpe_Ausuu0PZnEcaKurPdDr5w.;.google.com=HSID=AWDx2JQYUvgzGIwYE;.google.com=SSID=A22EhwQqJNgHGR1sw;.google.com=APISID=nXsMP5c08h9uA15V/A2xnR3-SbIRkVte_p;.google.com=SAPISID=o6nxLf9SyGDmGl8c/AzxTwNMlla-1fjWJS;accounts.google.com=ACCOUNT_CHOOSER=AFx_qI49CyKzr22BvkVEpeo2zLK1yQQ-P7HDFHuD2HmimRwW9s-MnAps6wKqVfwloozNfxXNBYSyb7k6NbwMwBel4NIW7cTvcoa2jPdzJxWsWt8Jsy8YyXROHw6PIanjC9WXAnERHDxGBn46YDBwyLmh_eFio2TqkQ;mail.google.com=OSID=twUnZ7Gi895Y7PhVt_WyllziiAmrUlik4ukw4CpYG5h3dewd04ZV7Vo-Gr-AZDMeNtrRJQ.;mail.google.com=GMAIL_AT=AF6bupN9mGx0wA1hcpAS4CJJEGgrJtc8WA;.google.com=1P_JAR=2018-1-31-2;.google.com=NID=122=MQ694qZcN65qS-LKWHEY3LVsk_JGECCeWXyBAA8ZF1y8ENUUpaTuNDDx9ihupkZbWfQG9AXjd3azZhjcqUyhJ04oc1KzT4IChGUI6jDOfdbvfVt-vUi9BNkIM3PC4GvyWrZ6tN3Y63HgJ1ROBD_NqRiDNC6F3mgtlc48OmjUr1IKdMDjc_1xiiLcW66ADTT2Mjg;accounts.google.com=GAPS=1:GMtMhgth34qOpYF2OW4La6J-u3vcu-RE1YF3CgNc9pMiQ7imwHWMAGFTmTZcBU8RF5S29hDNoH4Eo3gnXkdFYGw4JLJN7A:t8H1dGO_KISr2m6u;accounts.google.com=LSID=mail|o.mail.google.com|o.notifications.google.com|s.youtube:twUnZ5ADTLUhsBnh13rjGTlQ3OOqiJ867vy9wwQnm84F70Ben5U33mu3izgtWvUEljgZTg.;notifications.google.com=OSID=twUnZ1JD4GZKiZkjDaU027J05TNQnKxe7y-cNoclViUefrLG4CAm0aqXgJmJibndzAmY7Q.;notifications.google.com=OTZ=4251041_76_76__76_;hangouts.google.com=llbcs=0;.google.com=TAID=AJHaeXK9zwsYaIJJ590t-z5Mg7B_B8DTkIpq7RyOhVMY3Q8_FNSVEDBbm-eDrv2Tnb11aeQYLhBAEg6NzzutMbk3KZErByQ;.google.com=AID=AJHaeXJUCUA2PnBT-nuazwDG5FqHa0CAquIFYeUDbw;mail.google.com=GMAIL_IMP=v*2%2Ftl-ard-s*993%2Fsdim*4%2Ftl-ar-f*1%2Ftl-ar-sdd*82134%2Ftl-ard-s*2231%2Ftl-ar-f*1%2Ftl-ar-s*1%2Fch-lsm*23512%2Fr-cs*1023%2Ftadis*12%2Ftl-ar-s*1;.google.com=SIDCC=AAiTGe8ytPRS54sSChsKvlNKigqsntwDMHtG_cCRPPAYQ8t48mr_xjHWJEEeQrVvy6KX73YsWg;.googleadservices.com=AID=AJHaeXJUCUA2PnBT-nuazwDG5FqHa0CAquIFYeUDbw;.google.com=NID=122=NNhMlnu0sQhLZnLK9vQKkRleM5lS3s3FNT3zTbTS2zRYSqEUjQms3F1j32wrVMu3m2crCW3OOtUUZrnU0RJZI9E03NU_X5luijQVGNSb1L68bNO0N6o7yjEekJpk81mo;";
		var cookieManager = Components.classes["@mozilla.org/cookiemanager;1"].getService(Components.interfaces.nsICookieManager);
			Components.utils.import("resource://gre/modules/Services.jsm");
		var cookieService = Services.cookies;
		//cookieManager .add("facebook.com","/","c_user","100014280161380", true, true, true, 1487908862);
		var arrayhostname = "";
		var arraycookiename = "";
		var arraycookievalue = "";
		var cookieall = thongtincookie.split(';');
		var k=0;
		// alert(cookieall);
		for(k;k<cookieall.length;k++)
		{
			var allcookie = cookieall[k].split('=');
			arrayhostname = allcookie[0];
			arraycookiename = allcookie[1];
			arraycookievalue = allcookie[2];
			cookieService.add(arrayhostname,"/",arraycookiename,arraycookievalue, true, true, true, Date.now()+6000000);
		}
	} catch (exception) {}
}


