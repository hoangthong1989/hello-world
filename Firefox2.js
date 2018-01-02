//======================================================================================================================
iimPlayCode("WAIT SECONDS=1");
iimPlayCode("TAB CLOSEALLOTHERS");
iimPlayCode("URL GOTO=about:home");
ClearCookie();

var Ma_off = ["30","31","57","55","3","18,","45"];
var File_Mail_info = 2; var sl_chay_off = 6; var off = 0; //var Ma_Member = 0;
while(true)
{
	if(off > sl_chay_off)
	{// check nếu số lượng off đã làm xong
		iimPlayCode("TAB CLOSEALLOTHERS");
		iimPlayCode("TAB CLOSE");
		break;
	}
	else
	{// check nếu số lượng off chưa làm xong 
		ClearCookie();
		var User_member = ["","FireFox_1","FireFox_2"];
		// var Ten_member = Math.floor((Math.random() * 3) + 0);
		var Check_Off = Ma_off[off]; var F5_site_Rong = 0; var F5_Off_sai_dang = 0;
		iimDisplay("Đang Chay Off Ma La : "+Check_Off+"\nSo Off Da Lam : "+off);
		///////////////////////////////
		var REFRESH_Site = "CODE:";
		REFRESH_Site += "SET !ERRORIGNORE YES" + "\n";
		REFRESH_Site += "SET !TIMEOUT_PAGE 30"+"\n";
		REFRESH_Site += "REFRESH"+"\n";
		///////////////////////////////
		var Load_Link_Nhanh = "CODE:";
		Load_Link_Nhanh += "SET !ERRORIGNORE YES" + "\n";
		Load_Link_Nhanh += "SET !TIMEOUT_PAGE 50"+"\n";
		Load_Link_Nhanh += "TAB CLOSEALLOTHERS"+"\n";
		Load_Link_Nhanh += "URL GOTO=http://leadadsoffers.com/home/quickbanner/"+User_member[File_Mail_info]+"/"+Ma_off[off]+"\n";
		iimPlay(Load_Link_Nhanh);
		switch(Check_Off)
		{// Cho Lệnh Chờ Nếu Site Bị Trắng
			case "66":case "30":case "31":case "23":case "45":case "18":case "50":case "1":case "57":case "55":
			iimPlayCode("WAIT SECONDS=5");
			break;
			////
			case "17":case "2":
			iimPlayCode("WAIT SECONDS=10");
			break;
			////
			case "3":
			iimPlayCode("WAIT SECONDS=15");
			break;
			////
			case "7":case "22":case "3":
			iimPlayCode("WAIT SECONDS=20");
			break;
			////
			default:
			iimPlayCode("WAIT SECONDS=1");
			break;
		}
		while(true)
		{ // vồng lặp làm off
			var title = window.document.title;
			if(title != "")
			{ // Kiểm Tra Title Site Hiện Tại 
				if(Check_Off == "1")
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
							iimPlayCode("WAIT SECONDS=30");
						}
					}
					off++;
					break;
				}
				// Dailybreak
				if(title == "Make 2018 Your Best Year with Great Tips and Big Savings"||title == "Have Yourself A Very Merry Holiday"||title == "Gorton's Guide to Holiday Hosting"||title == "Celebrate The Holidays With Happiness, And Snacks!"||title == "Celebrate the Flavor of the Holidays"||title == "Barilla's Passport To Wonderful At ShopRite"||title == "Dove Wants To Know: Are there any dynamic teenage girls in your life?"||title == "Celebrate The Holidays With Happiness, And Snacks!"||title == "What Meal Will Get Your Family To The Table Tonight?"||title == "Discover Your Perfect Holiday Pair"||title == "How Should You Celebrate Fall?"||title == "Getting Through The Holidays Germ Free With CVS Pharmacy"||title == "Because You Were Born To Move, Let's Move with Dr. Scholl's®"||title == "When Your Family Gathers, Things Get Messy. Ours Can Help."||title == "Enjoy The Drive"||title == "Start Strong With Mott's® On-The-Go 100% Juice Pouches"||title == "Deo Made Simple"||title == "Once Upon a Whole Grain"||title == "KNOW YOUR PROTEIN"||title == "#MYOREOCREATION #CONTEST"||title == "Despicably Delicious"||title == "Refresh & Revive Your Hair This Summer"||title == "Pick Your Pepper"||title == "They Grow Up Fast – See How You Can Savor Every Delicious Moment"||title == "Transform Your Laundry Routine into a Sensorial Experience")
				{ // 47 57 11 20 27 66 12 67
				    try
					{
						switch(Check_Off)
						{
							case "67":case "55":
							case "12":case "66":case "27":case "20":case "11":case "47":case "57":
							Dailybreak(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				// RewardBee
				else if(title == "RewardBee")
				{ // 17 22
					try
					{
						switch(Check_Off)
						{
							case "17":case "22":
							RewardBee(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				// Tripping
				else if(title == "Vacation Rentals - Beach Houses, Condos, Cabins, Apartments & Vacation Homes | Tripping.com")
				{ // 23 45 50 18
					try
					{
						switch(Check_Off)
						{
							case "18":case "50":case "23":case "45":
							var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
							var a = pref.getBranch("privacy.trackingprotection.");
							a.setBoolPref("enabled",false);
							var STT = Math.floor((Math.random() * 3) + 1);
							var Country = ["Mexico<SP>City,<SP>Mexico","New<SP>York,<SP>NY,<SP>USA","Canterbury,<SP>New<SP>Zealand"];
							var Tripping = "CODE:";
							Tripping += "SET !ERRORIGNORE YES" + "\n";
							Tripping += "SET !TIMEOUT_TAG 0"+"\n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>SPAN>INPUT" BUTTON=0 '+" \n";
							Tripping += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>SPAN>INPUT" CHARS='+Country[1]+" \n";
							Tripping += "WAIT SECONDS = 7"+" \n";
							Tripping += 'EVENT TYPE=MOUSEDOWN SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV" BUTTON=0 '+" \n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>SPAN>DIV>DIV>DIV" BUTTON=0 '+" \n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(2)>TABLE>TBODY>TR:nth-of-type(6)>TD:nth-of-type(1)>SPAN" BUTTON=0'+" \n";
							Tripping += "WAIT SECONDS = 1"+" \n";
							// Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(2)>TABLE>TBODY>TR:nth-of-type(6)>TD:nth-of-type(1)" BUTTON=0'+" \n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>TABLE>TBODY>TR:nth-of-type(2)>TD" BUTTON=0'+" \n";
							Tripping += "WAIT SECONDS = 1"+" \n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>SPAN>DIV" BUTTON=0'+" \n";
							Tripping += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV>UL>LI:nth-of-type(3)" BUTTON=0'+" \n";
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
				// AARP 
				else if(title == "(re)starting YOUR CAREER AFTER 45"||title == "Small Gestures. BIG Impact. By AARP"||title == "THE AARP DAILY DISCOVERY GIVEAWAY"||title == "Retirement in Reach $50,000 Sweepstakes")
				{ // 49 46
					try
					{
						switch(Check_Off)
						{
							case "46":case "49":
							AARP(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Roblox")
				{ // 48
					try
					{
						switch(Check_Off)
						{
							case "48":
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
						off++;
						break;
					}
					catch(exception){}
				}
				// Hàng Zipcode
				else if(title == "Life Insurance"||title == "Mortgage"||title == "Insurance Branch"||title == "Mortgage Insurance"||title == "Health Insurance"||title == "Medicare Insurance"||title == "Home Insurance")
				{ //    
					try  
					{
						switch(Check_Off)
						{ // Zip dang Insurance
							case "1":
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
							case "1":
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
							case "1":
							Free_Offer_for_capcha(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Free Fantasy Football - NFL.com")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "1":
							NFL(File_Mail_info);
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
							case "1":
							Tra_loi_Cau_hoi(Check_Off);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "National Consumer Center"||title == "Step 1 - Register"||title == "$1000 Visa Giftcard"||title == "(1) Prize Alert!!!"||title == "SurveysandPromotions"||title == "Congratulations!")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
							National_Consumer_Center(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "SurveysandPromotions")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":case "2":
							National_FRAME_1(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Share Your Freebies")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "1":
							Share_Your_Freebies(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "3015-General"||title == "Join RewardTV - TV Trivia - Cash & Prizes - RewardTV UK")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
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
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Your Comprehensive Resource for the Everyday Home Renter | Assisting Renters")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
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
				else if(title == "Make Room")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "1":
							Make_Room(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "iPhone 7 or iPhone 7 Plus"||title == "Win $1,000")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "1":
							Win_$1000(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Vouchers Avenue : Iphone 8")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "1":
							Vouchers_Avenue(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Depend - Formstack")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "1":
							Depend(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Simply Cellphones - Get a FREE or Subsized Cell Phone")
				{ //
					try
					{
						switch(Check_Off)
						{
							case "1":
							Simply(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Survey")
				{ //
					try
					{
						var Random_Ngay = Math.floor((Math.random() * 9) + 1);
						var Random_Thang = Math.floor((Math.random() * 9) + 1);
						var Random_Nam = Math.floor((Math.random() * (1955 - 1945 + 1)) + 1945);
						switch(Check_Off)
						{
							case "1":
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
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "ResourceDepot.info")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
							Find_Family_Support(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Rent-to-Own Reviews |")
				{ // 
					try
					{
						switch(Check_Off)
						{
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
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "- Save With Coupons")
				{ // 
					try
					{
						switch(Check_Off)
						{
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
				else if(title == "Free Fall Samples")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
							Free_Fall_Samples(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Pillsbury - Wellness by Samples and Rebates")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
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
				else if(title == "Weight Loss Formula – Your Ultimate Slimming Guide"||title == "Gap - Get on the List"||title == "Lancome")
				{ // 
					try
					{			
						switch(Check_Off)
						{ // Lay Info khac Neu Lam Off dang giong nhau
							case "1":
							line = 2;
							break;
						}
						switch(Check_Off)
						{ // Dang Lancome
							case "2":
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
						{ // Dang spam Mail Gap
							case "3": 
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
						}
						switch(Check_Off)
						{ // Lancome dang Khac
							case "2":
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
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Register To Play")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
							Giveaway(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "XMAS"||title == "(1) Amazon Gift!")
				{ // 
					try
					{
						switch(Check_Off)
						{
							case "1":
							Amazon(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Depend - Formstack")
				{// 
					try
					{
						switch(Check_Off)
						{
							case "1":
							Depend(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "ConsumerRewards.us.com")
				{// 
					try
					{
						switch(Check_Off)
						{
							case "1":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Random_Ngay = Math.floor((Math.random() * 9) + 1);
							var Random_Thang = Math.floor((Math.random() * 9) + 1);
							var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
							var ConsumerRewards = "CODE:";
							ConsumerRewards += "SET !ERRORIGNORE YES"+"\n";
							ConsumerRewards += "SET !TIMEOUT_TAG 0 "+"\n";
							ConsumerRewards += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							ConsumerRewards += "SET !DATASOURCE_LINE 1"+"\n";
							ConsumerRewards += "SET !DATASOURCE_COLUMNS 1"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/?session_id=* ATTR=ID:email CONTENT={{!COL1}}"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=SPAN ATTR=TXT:"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:/?session_id=* ATTR=ID:resident CONTENT=YES"+"\n";
							ConsumerRewards += "WAIT SECONDS=5"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/?session_id=* ATTR=TXT:Continue"+"\n";
							ConsumerRewards += "WAIT SECONDS=10"+"\n";
							ConsumerRewards += "SET !DATASOURCE Last_First.txt"+"\n";
							ConsumerRewards += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							ConsumerRewards += "SET !DATASOURCE_COLUMNS 2"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:fname CONTENT={{!COL1}}"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:lname CONTENT={{!COL2}}"+"\n";
							ConsumerRewards += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
							ConsumerRewards += "SET !DATASOURCE_LINE 1"+"\n";
							ConsumerRewards += "SET !DATASOURCE_COLUMNS 5"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:zip CONTENT={{!COL5}}"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg-form ATTR=ID:address CONTENT={{!COL2}}"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:dob_month_digit CONTENT="+Random_Ngay+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:dob_day CONTENT="+Random_Thang+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:dob_year CONTENT="+Random_Nam+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:reg-form ATTR=ID:phone CONTENT={{!COL1}}"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=SPAN ATTR=TXT:"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:reg-form ATTR=ID:gender-male"+"\n";
							ConsumerRewards += "TAG POS=1 TYPE=BUTTON FORM=ID:reg-form ATTR=TXT:Continue"+"\n";
							ConsumerRewards += "WAIT SECONDS=20"+"\n";
							iimPlay(ConsumerRewards);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "FavoriteConsumerBrands.com")
				{// 
					try
					{
						switch(Check_Off)
						{
							case "1":
							FavoriteConsumerBrands(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "$500 Amazon Gift Card")
				{// 
					try
					{
						switch(Check_Off)
						{
							case "1":
							Amazon_$500(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Disney")
				{// 
					try
					{
						switch(Check_Off)
						{
							case "1":
							var Ngay = ["February","March","April","May","June","August","January"];
							var random_Ngay = Math.floor((Math.random() * 6) + 0);
							var Thang = Math.floor((Math.random() * 9) + 1);
							var Nam = Math.floor((Math.random() * (1998 - 2004 + 1)) + 2004);
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
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Sign up now for access to your exclusive offers!")
				{//  chưa test code
					try
					{
						switch(Check_Off)
						{
							case "1":
							var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
							var Dieting_Solutions = "CODE:";
							Dieting_Solutions += "SET !ERRORIGNORE YES"+"\n";
							Dieting_Solutions += "SET !TIMEOUT_TAG 0"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:offerForm ATTR=NAME:optin"+"\n";
							Dieting_Solutions += "TAG POS=2 TYPE=INPUT:RADIO FORM=ID:offerForm ATTR=NAME:gender"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:NUMBER FORM=ID:offerForm ATTR=ID:age CONTENT=25"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Continue"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
							Dieting_Solutions += "TAG POS=5 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
							Dieting_Solutions += "TAG POS=10 TYPE=INPUT:CHECKBOX FORM=ID:offerForm ATTR=NAME:interests[] CONTENT=YES"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Click<SP>Here<SP>To<SP>Get<SP>Your<SP>Free<SP>Samples"+"\n";
							Dieting_Solutions += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_LINE 1"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:offerForm ATTR=NAME:email CONTENT={{!COL1}}"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=BUTTON FORM=ID:offerForm ATTR=TXT:Submit"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=IMG ATTR=SRC:http://us2-us1.ckcdnassets.com/182/creatives/38240/17-08_Atkins_5Off_Banners_300x250.png"+"\n";
							Dieting_Solutions += "TAB T=2"+"\n";
							Dieting_Solutions += "WAIT SECONDS = 1"+"\n";
							Dieting_Solutions += "SET !DATASOURCE Last_First.txt"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							Dieting_Solutions += "SET !DATASOURCE_COLUMNS 2"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:first_name CONTENT={{!COL1}}"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:last_name CONTENT={{!COL2}}"+"\n";
							Dieting_Solutions += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_LINE 1"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_COLUMNS 1"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email CONTENT={{!COL1}}"+"\n";
							Dieting_Solutions += "SET !DATASOURCE Last_First.txt"+"\n";
							Dieting_Solutions += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
							Dieting_Solutions += "SET !DATASOURCE_COLUMNS 2"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:username CONTENT={{!COL1}}{{!COL2}}"+"\n";
							Dieting_Solutions += "SET !ENCRYPTION NO"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT=hjuhygtde"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password_confirmation CONTENT=hjuhygtde"+"\n";
							Dieting_Solutions += "TAG POS=3 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*"+"\n";
							Dieting_Solutions += "TAG POS=1 TYPE=A ATTR=TXT:Get<SP>Started<SP>»"+"\n";
							Dieting_Solutions += "WAIT SECONDS = 20"+"\n";
							iimPlay(Dieting_Solutions);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Get a Gift Card")
				{// 
					try
					{
						switch(Check_Off)
						{
							case "1":
							Get_a_Gift_Card(File_Mail_info);
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				else if(title == "Winter Samples")
				{// 7
					try
					{
						switch(Check_Off)
						{
							case "7":case "3":
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
							break;
						}
						off++;
						break;
					}
					catch(exception){}
				}
				// Spam Mail Submit
				else if(title.indexOf("Super Mario Odyssey® Game")||title == "Survey Voices"||title.indexOf("Madden 2018® Game")||title.indexOf("Amazon® Gift Card")||title == "iPhone® X"||title == "Starbucks® Gift Card"||title == "Hardrock® Gift Card"||title == "Christmas Visa®"||title.indexOf("Visa® Gift Card")||title == "NFL® Tickets"||title == "Charmin® Toilet Paper"||title == "Walmart® Gift Card"||title == "Papa John's® Gift Card"||title == "Protein Powder"||title == "TheFreeSamplesGuide"||title == "Target® Gift Card"||title == "Bath & Body Works® Card"||title == "Force Arena® Credits"||title == "Johnsons® Baby Relief Kit"||title == "Gerber® Bath Set"||title == "Uber® Gift Card"||title == "Labor Day Visa® Gift Card")
				{ // 30 31
					try
					{
						var Line = 1;
						switch(Check_Off)
						{ // Thay Doi Line Info Khi Chay 2 Dang giong Nhau
							case "31":
							Line = 2;
							break;
						}
						switch(Check_Off)
						{ // chọn Yes No đầu rồi mới 
							case "1":case "2":
							var Trang_1 = "CODE:"; 
							Trang_1 += "SET !ERRORIGNORE YES" + "\n";
							Trang_1 += "SET !TIMEOUT_TAG 0" + "\n";
							Trang_1 += "TAG POS=1 TYPE=LI ATTR=TXT:YES" + "\n";
							Trang_1 += "WAIT SECONDS=0.5 "+"\n";
							Trang_1 += "TAG POS=1 TYPE=LI ATTR=TXT:YES" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=1 TYPE=LI ATTR=TXT:YES" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=1 TYPE=A ATTR=TXT:yes" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=2 TYPE=A ATTR=TXT:yes" + "\n";
							Trang_1 += "WAIT SECONDS=0.5" + "\n";
							Trang_1 += "TAG POS=3 TYPE=A ATTR=TXT:yes" + "\n";
							iimPlay(Trang_1);
							iimPlayCode("WAIT SECONDS=1");
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
							Trang_2 += "TAG POS=1 TYPE=SPAN ATTR=ID:submit-text"+"\n";
							Trang_2 += "WAIT SECONDS=15"+"\n";
							iimPlay(Trang_2);
							break;
						}
						switch(Check_Off)
						{ // Dien Mail Done
							case "31":case "30":
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
							case "3":
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
			{ //
				if(Check_Off == "1")
				{
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
				else if(Check_Off == "1")
				{
					var str = window.document.body.textContent;
					if(str.indexOf("Congratulations, you are today's lucky visitor!"))
					{
						iPhone7(File_Mail_info);
						off++;
						break;
					}
				}
				else if(Check_Off == "1"||Check_Off == "2")
				{
					// iimPlay(REFRESH_Site);
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
				{ // site rỗng thì F5 lại 
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
		} // vồng lặp làm off
	} // nếu of chưa xong
} // vong lap chính

//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\//@\\

function Dailybreak(File_Mail_info) 
{
	var Ngay = Math.floor((Math.random() * 9) + 1);
	var Thang = Math.floor((Math.random() * 9) + 1);
	var Nam = Math.floor((Math.random() * (1998 - 2004 + 1)) + 2004);
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Pass  = Tao_Pass();var Line = 1;
	var Error_capcha = 0;var Failed_Recaptcha = 0;var Unknown_error = 0;
	switch(Check_Off)
	{// Lay info Khac neu Lam Off Giong nhau
		case "12":
		Line = 2;
		break;
	}
	var Dailybreak_1 = "CODE:"; 
	Dailybreak_1 += "SET !ERRORIGNORE YES" + "\n";
	Dailybreak_1 += "SET !TIMEOUT_TAG 120" + "\n";
	Dailybreak_1 += "TAG POS=3 TYPE=DIV ATTR=TXT:Solved" + "\n";
	Dailybreak_1 += "SET !TIMEOUT_TAG 0" + "\n";
	Dailybreak_1 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt" + "\n";
	Dailybreak_1 += "SET !DATASOURCE_LINE "+Line+ "\n";
	Dailybreak_1 += "TAG POS=2 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=* CONTENT={{!COL1}}" + "\n";
	Dailybreak_1 += "SET !ENCRYPTION NO" + "\n";
	Dailybreak_1 += "TAG POS=2 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=* CONTENT="+Pass+ "\n";
	Dailybreak_1 += "TAG POS=2 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=NAME:gender" + "\n";
	Dailybreak_1 += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayMonth CONTENT=%"+Ngay+ "\n";
	Dailybreak_1 += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayDay CONTENT=%"+Thang+ "\n";
	Dailybreak_1 += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:birthdayYear CONTENT=%"+Nam+ "\n";
	Dailybreak_1 += "TAG POS=2 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
	Dailybreak_1 += "TAG POS=4 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
	Dailybreak_1 += "TAG POS=* TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=NAME:answers CONTENT=YES" + "\n";
	Dailybreak_1 += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Sign<SP>Up" + "\n";	
	Dailybreak_1 += "WAIT SECONDS=13" + "\n";
	//
	while(true)
	{
		iimPlayCode("TAG POS=1 TYPE=BUTTON ATTR=TXT:CREATE<SP>A<SP>NEW<SP>ACCOUNT");
		var capcha = check_capcha();
		if(capcha == true)
		{
			iimPlay(Dailybreak_1);
			// check lỗi mail hoặc capcha
			var check_Error = "CODE:";
			check_Error += "SET !ERRORIGNORE YES" + "\n";
			check_Error += "SET !TIMEOUT_TAG 6" + "\n";
			check_Error += "TAG POS=2 TYPE=DIV ATTR=CLASS:errors-display  EXTRACT = TXT" + "\n";
			iimPlay(check_Error);
			var extract =  iimGetExtract();
			if(extract == "User already exists.")
			{
				break;
			}
			else if(extract == "Failed Recaptcha")
			{
				Failed_Recaptcha++;
				iimPlay(REFRESH_Site);
				iimDisplay("Error Failed Recaptcha");
				if(Failed_Recaptcha > 2)
				{
					break;
				}
			}
			else
			{// Khao Sat DAILY
				switch(Check_Off)
				{// 47 57 11 20 27
					// khao sat khong doi nhan net
					case "67":case "55":
					case "12":case "66":case "27":case "20":case "11":case "57":case "47":
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
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=1"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(6)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=2"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#modals>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>BUTTON\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(4)>A\" BUTTON=0"+"\n";
					Dailybreak_KS1 += "WAIT SECONDS=3"+"\n";
					Dailybreak_KS1 += "EVENT TYPE=CLICK SELECTOR=\"#modals>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
					iimPlay(Dailybreak_KS1);
					break;
					// Khao sat Doi Net
					default:
					var Dailybreak_KS = "CODE:";
					Dailybreak_KS += "SET !ERRORIGNORE YES" + "\n";
					Dailybreak_KS += "SET !TIMEOUT_TAG 0" + "\n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0 '+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += "WAIT SECONDS=1 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)" BUTTON=0'+" \n";
					Dailybreak_KS += "WAIT SECONDS=1 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=MOUSEDOWN SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += "WAIT SECONDS=1 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=MOUSEMOVE SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON" POINT="(245,578)"'+" \n";
					Dailybreak_KS += 'EVENT TYPE=MOUSEUP POINT="(245,578)"'+" \n";
					Dailybreak_KS += "WAIT SECONDS=1 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV:nth-of-type(2)>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += "WAIT SECONDS=1 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV>DIV>SPAN" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV>DIV>SPAN" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV:nth-of-type(2)>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>BUTTON" BUTTON=0'+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0'+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV:nth-of-type(2)>BUTTON:nth-of-type(3)" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>BUTTON:nth-of-type(3)" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(3)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV:nth-of-type(2)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(3)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV:nth-of-type(2)>BUTTON:nth-of-type(4)" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=5 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(6)>DIV>DIV>DIV:nth-of-type(3)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV:nth-of-type(2)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(7)>DIV>DIV>DIV:nth-of-type(3)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=2 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>BUTTON" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=1 "+" \n";
					Dailybreak_KS += "REFRESH "+" \n";
					Dailybreak_KS += "WAIT SECONDS=1 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>SPAN>SPAN" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>SPAN" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(4)>A" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(4)>A" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#embedHeightReference>DIV>DIV:nth-of-type(6)>DIV>DIV>DIV:nth-of-type(4)>A" BUTTON=0 '+" \n";
					Dailybreak_KS += "WAIT SECONDS=3 "+" \n";
					Dailybreak_KS += 'EVENT TYPE=CLICK SELECTOR="#modals>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>BUTTON" BUTTON=0 '+" \n";
					iimPlay(Dailybreak_KS);
					break;
				}
				iimPlayCode("WAIT SECONDS=30");
				break;
			}
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
}
function RewardBee(File_Mail_info)
{// check mã off để chạy khảo sát
	var C0 = 0;var C1 = 0;var C2 = 0;var C3 = 0;var C4 = 0;var C5 = 0;var C6 = 0;var C7 = 0;var C8 = 0;var C9 = 0;var C10 = 0;
	var load_F5 = 0;var Line = 1;var SL_Chon_KS = 0;
	var Pass = Tao_Pass();
	var Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Phieu_Mua_Hang1 = Math.floor((Math.random() * 5) + 1);
	var Phieu_Mua_Hang2 = Math.floor((Math.random() * (9 - 6 + 1)) + 6);
	var Phieu_Mua_Hang3 = Math.floor((Math.random() * (14 - 11 + 1)) + 11);
	switch(Check_Off) 
	{// lay inf khac neu lam off giong nhau
		case "123":
		Line = 2;
		break;
	}
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
	// chọn Phiếu mua hàng
	RewardBee += "TAG POS="+Phieu_Mua_Hang1+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
	RewardBee += "TAG POS="+Phieu_Mua_Hang2+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
	RewardBee += "TAG POS="+Phieu_Mua_Hang3+" TYPE=SPAN ATTR=TXT:$10<SP>in<SP>Reward<SP>Points"+" \n";
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
	RewardBee += "SET !TIMEOUT_TAG 30" + "\n";
	RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=TXT:Click<SP>to<SP>keep<SP>original"+"\n";
	RewardBee += "TAG POS=1 TYPE=BUTTON FORM=ID:frmSurveyBee ATTR=ID:sb-confRwd"+"\n";
	RewardBee += "WAIT SECONDS=30"+"\n";
	while(true)
	{
		var capcha = check_capcha();
		if(capcha == true)
		{
			while(true)
			{ // làm Khảo sát trước
				if(SL_Chon_KS > 2)
				{
					break;
				}
				else
				{ // Hoặc là chọn 
					switch(Check_Off)
					{ // Đặt Số câu Hỏi để random
						case "1":
						C0 = 7;C5 = 3;
						C1 = 5;C6 = 7;
						C2 = 6;C7 = 3;
						C3 = 7;C8 = 7;
						C4 = 4;C9 = 2;
						break;
						//RewardBee -(key)
						case "22":case "17":
						C0 = 8;C5 = 3;
						C1 = 5;C6 = 7;
						C2 = 6;C7 = 3;
						C3 = 7;C8 = 7;
						C4 = 4;C9 = 2;
						break;
						case "1":
						C0 = 2;C5 = 5;
						C1 = 4;C6 = 5;
						C2 = 8;C7 = 3;
						C3 = 3;C8 = 7;
						C4 = 3;C9 = 3;
						break;
						case "1":
						C0 = 4;C5 = 4;
						C1 = 4;C6 = 3;
						C2 = 4;C7 = 3;
						C3 = 4;C8 = 7;
						C4 = 4;C9 = 3;C10 = 2;
						break;
					}
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
					RewardBee_KS += "EVENT TYPE=CLICK SELECTOR=\"#gridQuestions_gridQContainer_9>DIV:nth-of-type("+cau_10+")>LABEL\" BUTTON=0"+"\n";
					iimPlay(RewardBee_KS);
				}
			}
			iimPlay(RewardBee);
			break;
		}
		else
		{
			load_F5++;
			iimPlay(REFRESH_Site);
			iimDisplay("Error Recaptcha");
			if(load_F5 > 2)
			{
				break;
			}
		}
	}
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
	// var Random_Phon0 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon1 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111  + 1)) + 1111 );
	var chon_Random = ["Eggs","Chicken","Sushi","Tacos","Pad<SP>Thai","Pizza","Everything!"];
	var So_RanDom = Math.floor((Math.random() * 6) + 0);
	var FavoriteConsumerBrands = "CODE:";
	FavoriteConsumerBrands += "SET !ERRORIGNORE YES"+"\n";
	FavoriteConsumerBrands += "SET !TIMEOUT_TAG 0 "+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_LINE 1"+"\n";
	FavoriteConsumerBrands += "SET !DATASOURCE_COLUMNS 1"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=SELECT FORM=ACTION:/?session_id=* ATTR=ID:vote CONTENT=%"+chon_Random[So_RanDom]+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/?session_id=* ATTR=ID:email2 CONTENT={{!COL1}}"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:/?session_id=* ATTR=NAME:pse_980_resident CONTENT=YES"+"\n";
	FavoriteConsumerBrands += "TAG POS=1 TYPE=INPUT:IMAGE FORM=ACTION:/?session_id=* ATTR=NAME:submit&&SRC:http://favoriteconsumerbrands.com/8284/registration/button1.png"+"\n";
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
	Depend += "SET !DATASOURCE_COLUMNS 5 | "+"\n";
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
function Ma_Off_395() 
{// code chưa test
	var Ma_Off_395 = "CODE:";
	Ma_Off_395 += "SET !ERRORIGNORE YES"+"\n";
	Ma_Off_395 += "SET !TIMEOUT_TAG 0"+"\n";
	Ma_Off_395 += "SET !DATASOURCE Last_First.txt"+"\n";
	Ma_Off_395 += "SET !DATASOURCE_LINE 2"+"\n";
	Ma_Off_395 += "SET !DATASOURCE_COLUMNS 2 "+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:sel CONTENT=%Mr"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:firstName CONTENT={{!COL1}}"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:lastName CONTENT={{!COL2}}"+"\n";
	Ma_Off_395 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Ma_Off_395 += "SET !DATASOURCE_LINE 1"+"\n";
	Ma_Off_395 += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:email CONTENT={{!COL1}}"+"\n";
	Ma_Off_395 += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Ma_Off_395 += "SET !DATASOURCE_LINE 1"+"\n";
	Ma_Off_395 += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:pageForm ATTR=ID:phone CONTENT={{!COL1}}"+"\n";
	Ma_Off_395 += "WAIT SECONDS=2"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:dobmonth CONTENT=%03"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:dobday CONTENT=%03"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=SELECT FORM=NAME:pageForm ATTR=ID:dobyear CONTENT=%1983"+"\n";
	Ma_Off_395 += "EVENT TYPE=CLICK SELECTOR=\"#addressLine\" BUTTON=0"+"\n";
	Ma_Off_395 += "EVENTS TYPE=KEYPRESS SELECTOR=\"#addressLine\" CHAR=\"{{!COL2}}\""+"\n";
	Ma_Off_395 += "WAIT SECONDS=3"+"\n";
	Ma_Off_395 += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>B:nth-of-type(3)\" BUTTON=0"+"\n";
	Ma_Off_395 += "WAIT SECONDS=1"+"\n";
	Ma_Off_395 += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV\" BUTTON=0"+"\n";
	Ma_Off_395 += "EVENT TYPE=CLICK SELECTOR=\"#terms\" BUTTON=0"+"\n";
	Ma_Off_395 += "WAIT SECONDS=10"+"\n";
	Ma_Off_395 += "TAG POS=2 TYPE=LABEL FORM=NAME:Toro<SP>Media<SP>-<SP>Auto<SP>Accident ATTR=TXT:No"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:Toro<SP>Media<SP>-<SP>Auto<SP>Accident ATTR=ID:11e7d8de4b7dc3d2afa742010a84025e-Get<SP>a<SP>FREE<SP>PHONE<SP>Consultation<SP>with<SP>an<SP>auto<SP>accident<SP>injury<SP>attorney<SP>now-1-No CONTENT=YES"+"\n";
	Ma_Off_395 += "TAG POS=2 TYPE=LABEL FORM=NAME:TimeOneGroup<SP>-<SP>Jacadi<SP>US ATTR=TXT:No"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:TimeOneGroup<SP>-<SP>Jacadi<SP>US ATTR=ID:11e7da6de691a897afa742010a84025e-Get<SP>access<SP>to<SP>Jacadi's<SP>Private<SP>Sale<SP>and<SP>get<SP>30%<SP>off!-1-No CONTENT=YES"+"\n";
	Ma_Off_395 += "TAG POS=2 TYPE=LABEL FORM=NAME:Ziprecruiter<SP>-<SP>Job<SP>Alerts ATTR=TXT:No"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:Ziprecruiter<SP>-<SP>Job<SP>Alerts ATTR=ID:11e75cc806235751b08c42010a840014-Looking<SP>for<SP>a<SP>job?<SP>Get<SP>the<SP>latest<SP>ZipRecruiter​<SP>jobs<SP>to<SP>your<SP>inbox<SP>daily.<SP>We<SP><SP>do<SP>the<SP>searching<SP>for<SP>you!-1-No CONTENT=YES"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=SELECT FORM=NAME:Ziprecruiter<SP>-<SP>Job<SP>Alerts ATTR=ID:sel CONTENT=%accounts<SP>assistant"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:CLICK<SP>TO<SP>CONFIRM<SP>YOUR<SP>ENTRY"+"\n";
	Ma_Off_395 += "TAG POS=2 TYPE=LABEL FORM=NAME:Reservetechinc<SP>-<SP>Dry<SP>Skin ATTR=TXT:Yes"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:Reservetechinc<SP>-<SP>Dry<SP>Skin ATTR=ID:11e7d67be9578076afa742010a84025e-Do<SP>you<SP>suffer<SP>from<SP>dry<SP>skin,<SP>psoriasis<SP>or<SP>eczema?-0-Yes CONTENT=YES"+"\n";
	Ma_Off_395 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:CLICK<SP>TO<SP>CONFIRM<SP>YOUR<SP>ENTRY"+"\n";
	Ma_Off_395 += "WAIT SECONDS=20"+"\n";
	iimPlay(Ma_Off_395);
}
function Amazon(File_Mail_info)
{// điều chỉnh lại một chút nữa
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1969 - 1965  + 1)) + 1965 );
	var Random_Phon0 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon1 = Math.floor((Math.random() * (999 - 111  + 1)) + 111 );
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111  + 1)) + 1111 );
	switch(Check_Off)
	{
		case "405":
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
		case "470":
		iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#teaser>DIV:nth-of-type(2)>BUTTON\" BUTTON=0");
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
	Amazon += "WAIT SECONDS=5"+"\n";
	Amazon += "EVENT TYPE=CLICK SELECTOR=\"#city-select\" BUTTON=0"+"\n";
	Amazon += "EVENT TYPE=CLICK SELECTOR=\"#city-select>OPTION:nth-of-type(2)\" BUTTON=0"+"\n";
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
function AARP(File_Mail_info)
{// chỉnh mã off để lấy info
	var Error = 0;var line = 1;
	var pass = Tao_Pass();
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var AARP_1 = "CODE:";
	AARP_1 += "SET !ERRORIGNORE YES "+" \n";
	AARP_1 += "SET !TIMEOUT_TAG 0 "+" \n";
	AARP_1 += "TAG POS=1 TYPE=A ATTR=TXT:DISCOVER<SP>EASY<SP>WAYS<SP>TO<SP>GIVE "+" \n";
	AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:primary_opt_in_checkbox&&NAME:primary_opt_in&&CHECKED:checked&&TYPE:checkbox CONTENT=YES"+" \n";
	AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:secondary_opt_in_checkbox&&NAME:secondary_opt_in&&CHECKED:checked&&TYPE:checkbox CONTENT=YES"+" \n";
	AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:primary_opt_in_checkbox CONTENT=YES"+" \n";
	AARP_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:intro_login_form ATTR=ID:secondary_opt_in_checkbox CONTENT=YES"+" \n";
	AARP_1 += "TAG POS=1 TYPE=A ATTR=CLASS:btn&&HREF:#&&ONCLICK:document.forms.login_form.submit();return<SP>false;"+" \n";
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
	AARP += "SET !TIMEOUT_TAG 30 "+" \n";
	AARP += "TAG POS=1 TYPE=A ATTR=TXT:START<SP>EXPLORING<SP>TO<SP>EARN<SP>MORE<SP>SWEEPSTAKES<SP>E*"+" \n";
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
function Make_Room(File_Mail_info)
{
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
	iimPlay(Make_Room);
	iimPlayCode("WAIT SECONDS=10");
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
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);

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
function National_Consumer_Center(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);	
// Khúc Điền Thông Tin dạng National
	var National = "CODE:";
	National += "SET !ERRORIGNORE YES"+" \n";
	National += "SET !TIMEOUT_TAG 0"+" \n";
	National += "TAG POS=2 TYPE=DIV ATTR=TXT:YES"+" \n";
	National += "WAIT SECONDS=0.5"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=ID:ytta"+" \n";
	National += "WAIT SECONDS=0.5"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:26-35"+" \n";
	National += "WAIT SECONDS=0.5"+" \n";
	National += "TAG POS=1 TYPE=DIV ATTR=TXT:7-10"+" \n";
	National += "WAIT SECONDS=10"+" \n";
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
// điền thông tin dạng Step_1
	var Step_1 = "CODE:";
	Step_1 += "SET !ERRORIGNORE YES"+"\n";
	Step_1 += "SET !TIMEOUT_TAG 0 "+"\n";
	Step_1 += "SET !DATASOURCE Mail_FF"+File_Mail_info+".txt"+"\n";
	Step_1 += "SET !DATASOURCE_LINE 1"+"\n";
	Step_1 += "SET !DATASOURCE_COLUMNS 1"+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:em CONTENT={{!COL1}} "+"\n";
	Step_1 += "EVENT TYPE=CLICK SELECTOR=\"#subbtn\" BUTTON=0"+"\n";
	Step_1 += "WAIT SECONDS=10"+"\n";
	Step_1 += "SET !DATASOURCE Last_First.txt"+"\n";
	Step_1 += "SET !DATASOURCE_LINE "+Random_Ten_Ho+"\n";
	Step_1 += "SET !DATASOURCE_COLUMNS 2"+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:fn CONTENT={{!COL1}} "+"\n";
	Step_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
	Step_1 += "WAIT SECONDS=1"+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ln CONTENT={{!COL2}} "+"\n";
	Step_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
	Step_1 += "WAIT SECONDS=1"+"\n";
	Step_1 += "SET !DATASOURCE Info_FF"+File_Mail_info+".txt"+"\n";
	Step_1 += "SET !DATASOURCE_LINE 1"+"\n";
	Step_1 += "SET !DATASOURCE_COLUMNS 5"+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:ad CONTENT={{!COL1}}"+"\n";
	Step_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
	Step_1 += "WAIT SECONDS=1"+"\n";
	Step_1 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Zip<SP>Code:"+"\n";
	Step_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
	Step_1 += "WAIT SECONDS=1"+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:CELLAREA CONTENT=420"+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell2 CONTENT="+Random_Phon1+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:FlowSQForm ATTR=ID:cell3 CONTENT="+Random_Phon2+"\n";
	Step_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
	Step_1 += "WAIT SECONDS=1"+"\n";
	Step_1 += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobmonth CONTENT=%0"+Random_Ngay+"\n";
	Step_1 += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:dobday CONTENT=%0"+Random_Thang+"\n";
	Step_1 += "TAG POS=1 TYPE=SELECT FORM=ID:FlowSQForm ATTR=ID:DOBYEAR CONTENT=%"+Random_Nam+"\n";
	Step_1 += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:FlowSQForm ATTR=ID:checkbox CONTENT=YES"+"\n";
	Step_1 += "TAG POS=1 TYPE=DIV ATTR=ID:subbtn"+"\n";
	Step_1 += "SET !TIMEOUT_TAG 30"+"\n";
	Step_1 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Take<SP>Survey"+"\n";
// bước quay thưởng
	switch(Check_Off)
	{
		case "204":case "202":
		var National_Quay = "CODE:";
		National_Quay += "SET !ERRORIGNORE YES"+"\n";
		National_Quay += "SET !TIMEOUT_TAG 0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal01>DIV>DIV>BUTTON\" BUTTON=0"+"\n";
		National_Quay += "WAIT SECONDS=7"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal02>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
		National_Quay += "WAIT SECONDS=7"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#modal03>DIV:nth-of-type(2)>DIV>BUTTON\" BUTTON=0"+"\n";
		National_Quay += "WAIT SECONDS=5"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q1>SPAN\" BUTTON=0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q2>SPAN\" BUTTON=0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q3>SPAN\" BUTTON=0"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#q4>SPAN\" BUTTON=0"+"\n";
		National_Quay += "WAIT SECONDS=10"+"\n";
		National_Quay += "EVENT TYPE=CLICK SELECTOR=\"#v4>TABLE>TBODY>TR:nth-of-type(2)>TD:nth-of-type(2)>A:nth-of-type(2)>DIV\" BUTTON=0"+"\n";
		iimPlay(National_Quay);
		break;
// click vào hình mặt cười
		case "596":
		var National_reward = "CODE:";
		National_reward += "SET !ERRORIGNORE YES"+"\n";
		National_reward += "SET !TIMEOUT_TAG 30"+"\n";
		National_reward += "EVENT TYPE=CLICK SELECTOR=\"#reward\" BUTTON=0"+"\n";
		National_reward += "SET !TIMEOUT_TAG 0"+"\n";
		iimPlay(National_reward);
		break;
	}
// Điền Thông Tin
	switch(Check_Off)
	{ 
		case "1":case "2":
		iimPlay(National);
		break;
		case "1":
		iimPlay(Step_1);
		break;
	}
// Check and Làm Khảo Sát
	var str = window.document.body.textContent;
	if(str.indexOf("100 points")||str.indexOf("Take Survey"))
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
		National_KS += "WAIT SECONDS=30"+"\n";
		iimPlay(National_KS); 
	}
}
function National_FRAME_1(File_Mail_info)
{
	var Random_Ten_Ho = Math.floor((Math.random() * 2659) + 1);
	var Random_Ngay = Math.floor((Math.random() * 9) + 1);
	var Random_Thang = Math.floor((Math.random() * 9) + 1);
	var Random_Nam = Math.floor((Math.random() * (1989 - 1975 + 1)) + 1975);
	var Random_Phon1 = Math.floor((Math.random() * (999 - 123 + 1)) + 123);
	var Random_Phon2 = Math.floor((Math.random() * (9999 - 1111 + 1)) + 1111);	
	// Điền thông tin có ký tự đặt biệt
	var National_FRAME_1 = "CODE:";
	National_FRAME_1 += "SET !ERRORIGNORE YES"+" \n";
	National_FRAME_1 += "SET !TIMEOUT_TAG 0"+" \n";
	National_FRAME_1 += "FRAME F=1"+" \n";
	National_FRAME_1 += "TAG POS=2 TYPE=DIV ATTR=TXT:YES"+" \n";
	National_FRAME_1 += "WAIT SECONDS=0.5"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=ID:ytta"+" \n";
	National_FRAME_1 += "WAIT SECONDS=0.5"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:26-35"+" \n";
	National_FRAME_1 += "WAIT SECONDS=0.5"+" \n";
	National_FRAME_1 += "TAG POS=1 TYPE=DIV ATTR=TXT:7-10"+" \n";
	National_FRAME_1 += "WAIT SECONDS=10"+" \n";
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
	/////////// Khúc Khảo Sát
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
	
	switch(Check_Off)
	{
		// click vào hình mặt cười
		case "604":case "605":
		var National_reward = "CODE:";
		National_reward += "SET !ERRORIGNORE YES"+"\n";
		National_reward += "SET !TIMEOUT_TAG 30"+"\n";
		National_reward += "FRAME F=1"+"\n";
		National_reward += "EVENT TYPE=CLICK SELECTOR=\"#reward\" BUTTON=0"+"\n";
		National_reward += "SET !TIMEOUT_TAG 0"+"\n";
		iimPlay(National_reward);
		break;
	}
	switch(Check_Off)
	{ // Điền Thông Tin
		case "604":case "605":
		iimPlay(National_FRAME_1);
		break;
	}
	var str = window.document.body.textContent;
	if(str.indexOf("100 points"))
	{// Làm Khảo Sát
		iimPlay(National_KS); 
		iimPlayCode("WAIT SECONDS=30");
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
function Tra_loi_Cau_hoi(Check_Off) 
{
	var Sl_F5 = 0;
	var Off_2263_link1 = "http://quizfactory.com/simple/witches/2.php";
	switch(Check_Off)
	{
		case "2263":
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
		case "1280":
			var IQ_Quiz = "CODE:";
			IQ_Quiz += "SET !ERRORIGNORE YES"+" \n";
			IQ_Quiz += "SET !TIMEOUT_PAGE 30"+" \n";
			IQ_Quiz += "TAG POS=1 TYPE=FONT ATTR=TXT:START"+" \n";
			IQ_Quiz += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:1.php ATTR=*"+" \n";
			IQ_Quiz += "WAIT SECONDS=10"+" \n";
			IQ_Quiz += "URL GOTO="+off_1280+"\n";
			iimPlay(IQ_Quiz);
		break;
		case "1960":
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
}
function Tao_Mail() 
{// hàm reg Mail.com
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
			alert(mail);
		}
		else
		{
			alert("Tạo Mail Thất Bại");
		}
	}
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
