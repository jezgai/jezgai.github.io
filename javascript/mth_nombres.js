class Nombres {

    constructor(masculinos, femeninos) {
        this._masculinos = masculinos;
        this._femeninos = femeninos;
    }
    
	get masculinos() 
	{
		return this._masculinos.clone().shuffle();
	}
	
	get femeninos() 
	{
		return this._femeninos.clone().shuffle();
	}

}

let nombresBritanos = new Nombres( [ "Adair", "Ahern", "Ahearn", "Ailbe", "Ailill", "Airell", "Alan", "Allen", "Allan", "Allyn", "Alanson", "Angus", "Anghus", 
									 "Aengus", "Aonghus", "Anna", "Anant", "Ansgar", "Anwell", "Anwyl", "Anyon", "Aod", "Ap Owen", "Arawn", "Argyle", "Arlen", 
									 "Arlin", "Arlyn", "Arlan", "Arthur", "Artur", "Art", "Atty", "Attie", "Arturo", "Baird", "Barry", "Bairrfhionn", "Barra", "Bearach", "Bearchan", "Beacan", 
									 "Becan", "Bedwyr", "Bendigeidfran", "Bevan", "Bevin", "Bevyn", "Blaine", "Blayne", "Blane", "Blainey", "Blayney", "Blair", "Boadhagh", "Bowden", "Bowdyn", 
									 "Boden", "Bodyn", "Boyden", "Boyd", "Bowen", "Bowyn", "Boynton", "Bran", "Brann", "Brasil", "Breasal", "Basil", "Breanainn", "Breandan", "Bredon", "Brandan", 
									 "Brendan", "Bran", "Bram", "Broin", "Brennan", "Brett", "Bret", "Brian", "Bryan", "Bryant", "Briant", "Brice", "Bryce", "Bricriu", "Britomartus", "Burgess", 
									 "Cachamwri", "Cadell", "Cadman", "Calder", "Calum", "Cameron", "Camero", "Camey", "Caoimhghin", "Caradoc", "Cardew", "Carew", "Carey", "Cary", "Carney", "Car", 
									 "Carr", "Cathaoir", "Cathair", "Carrol", "Carroll", "Casey", "Cassivellaunus", "Caswallan", "Cathal", "Cahal", "Conall", "Connell", "Cathbad", "Cedric", 
									 "Celyddon", "Chad", "Clust", "Clustfeinad", "Cocidius", "Coinneach", "Conall", "Conall Cernach", "Conan", "Conant", "Con", "Conn", "Cuinn", "Conchobar", 
									 "Condan", "Condon", "Conlaoch", "Conn", "Connla", "Conroy", "Conway", "Corann", "Cormac", "Cairbre", "Carbry", "Cradawg", "Cuchulain", "Culain", "Culann", 
									 "Culhwch", "Cullen", "Custennin", "Cynyr", "Dallas", "Daman", "Darcy", "Dearg", "Dermot", "Desmond", "Devin", "Devyn", "Dillion", "Dinsmore", "Doane", 
									 "Donald", "Don", "Doyle", "Doy", "Dughall", "Dougal", "Doughal", "Donat", "Donal", "Domhnall", "Donall", "Doran", "Dorran", "Donnally", "Donnelly", 
									 "Donnchadh", "Donogh", "Doughlas", "Douglas", "Drem", "Driscoll", "Druce", "Drudwyn", "Drummond", "Duane", "Dewain", "Dwayne", "Duer", "Duff", "Dubv", 
									 "Duffy", "Duncan", "Dunham", "Dyfed", "Ea", "Edan", "Eburacon", "Efnisien", "Egan", "Eghan", "Egomas", "Einion", "Elidor", "Emrys", "Erim", "Evan", 
									 "Evnissyen", "Ewen", "Ewan", "Ewyn", "Eoghann", "Eoin", "Farrel", "Farrell", "Ferchar", "Ferdiad", "Ferghus", "Fergus", "Fearghus", "Ferris", "Fiacre", 
									 "Fiacra", "Fiallan", "Fiamain", "Finbar", "Finnbar", "Fynbar", "Finnobarr", "Finian", "Finn", "Fingal", "Floyd", "Forsa", "Gall", "Galvin", "Galvyn", 
									 "Gawain", "Gelban", "Gildas", "Gilmore", "Gilroy", "Girard", "Glen", "Glyn", "Glenn", "Glifieu", "Gorsedd", "Gruddieu", "Guy", "Gwalchmai", "Gwawl", 
									 "Gwefl", "Gwern", "Gwernach", "Gwri", "Gwynham", "Hafgan", "Halwn", "Hefeydd", "Heilyn", "Henbeddestr", "Henwas", "Herne", "Hoel", "Huarwar", "Hueil", 
									 "Huon", "Iden", "Innis", "Inness", "Irvin", "Irven", "Irvyn", "Irving", "Kalen", "Kailen", "Kalan", "Kallan", "Kheelan", "Kellen", "Kane", "Kayne", 
									 "Karney", "Kearney", "Keane", "Keene", "Kegan", "Keegan", "Keaghan", "Keir", "Kelvin", "Kelvyn", "Kelwin", "Kelwyn", "Kendall", "Kendal", "Kendhal", 
									 "Kenneth", "Kent", "Kentigern", "Kermit", "Kermode", "Kerry", "Keary", "Kerwin", "Kerwyn", "Kirwin", "Kirwyn", "Kieran", "Kevin", "Kevyn", "Kevan", 
									 "Killian", "Kilian", "Kunagnos", "Kynthelig", "Lairgnen", "Lee", "Leigh", "Leith", "Lesley", "Leslie", "Lincoln", "Lir", "Llewelyn", "Lloyd", "Llyr", 
									 "Mabon", "Mac", "Mack", "Maccus", "Macklin", "Macklyn", "Maddox", "Maddock", "Malcolm", "Malvin", "Malvyn", "Melvin", "Melvyn", "Melville", "Matholwch", 
									 "Medr", "Medredydd", "Menw", "Merlin", "Merlyn", "Morfran", "Morgan", "Morven", "Morvyn", "Mariner", "Marvin", "Marvyn", "Moryn", "Murray", "Murry", 
									 "Murdoch", "Murtagh", "Mynogan", "Naois", "Neal", "Neil", "Nealon", "Nell", "Neale", "Niall", "Neill", "Niallan", "Nyle", "Nels", "Nelson", "Nemausus", 
									 "Newlin", "Newlyn", "Niece", "Neese", "Nisien", "Nolan", "Noland", "Orin", "Oran", "Oscar", "Oskar", "Osker", "Osckar", "Ossian", "Oisin", "Owen", "Owin", 
									 "Owyn", "Pendaran", "Perth", "Pert", "Phelan", "Powell", "Pryderi", "Pwyll", "Quin", "Quinn", "Regan", "Reghan", "Reagan", "Reaghan", "Rivalin", "Ronan", 
									 "Roy", "Sativola", "Sawyer", "Scilti", "Setanta", "", "Sheridan", "Sidwell", "Sloan", "Sloane", "Sugn", "Tadhg", "Taliesin", "Tanguy", "Taran", "Teague", 
									 "Teaghue", "Teirtu", "Teithi", "Tegid", "Teyrnon", "Tiernan", "Tiernay", "Torrey", "Tory", "Trahern", "Tremayne", "Tremaine", "Trevor", "Tuireann", "Turi", 
									 "Twrch", "Trwyth", "Uchdryd", "Uisnech", "Usenech", "Varden", "Vardon", "Varney", "Vaughn", "Vortigern", "Weylin", "Weylyn", "Wynne", "Yspaddaden" ], 
                                    [ "Aberfa", "Abertha", "Adain", "Adara", "Addfwyn", "Addiena", "Adyna", "Aelwyd", "Aeron", "Amser", "Angharad", "Anna", "Annwyl", "Argel", "Arglwyddes", 
                                    "Argoel", "Argraff", "Arial", "Ariana", "Arianell", "Ariene", "Aranrhod", "Arianrhod", "Arianwen", "Arlais", "Armes", "Arthes", "Arwydd", "Asgre", "Auron", 
                                    "Avenable", "Banon", "Berth", "Berthog", "Bethan", "Blanchfleur", "Blodeuwedd", "Blodwen", "Braith", "Brandgaine", "Branwen", "Bregus", "Briallen", "Brisen", 
                                    "Bronwen", "Buddug", "Brynn", "Cadwyn", "Caethes", "Cafell", "Canaid", "Cari", "Caron", "Carys", "Cate", "Cath", "Catrin", "Ceinwyn", "Ceri", "Ceridwen", 
                                    "Cerwen", "Cigfa", "Clarisant", "Cordelia", "Corsen", "Cragen", "Creiddylad", "Creirwy", "Cymreiges", "Daron", "Dee", "Del", "Dera", "Derwen", "Deryn", 
                                    "Deverell", "Dicra", "Dierdre", "Difyr", "Dilys", "Don", "Druantia", "Drysi", "Dwyn", "Dylis", "Ebrill", "Efa", "Eheubryd", "Eira", "Eirianwen", "Eiriol", 
                                    "Elaine", "Elen", "Eleri", "Ellylw", "Eluned", "Eneuawy", "Enfys", "Enid", "Enrhydreg", "Epona", "Erdudvyl", "Eres", "Essyllt", "Eurneid", "Eurolwyn", "Eyslk", 
                                    "Fiona", "Ffanci", "Ffion", "Fflur", "Ffraid", "Gaenor", "Ganieda", "Garan", "Genevieve", "Gladys", "Glenna", "Glenys", "Glynis", "Goewin", "Goleuddydd", "Gorawen", 
                                    "Guinevere", "Gwaeddan", "Gwanwyn", "Gwawr", "Gwen", "Gwenda", "Gwendolyn", "Gwener", "Gweneth", "Gwenhwyfar", "Gwenledyr", "Gwenith", "Gwenllian", "Gwenn Alarch", 
                                    "Gwenno", "Gwerfyl", "Gwladys", "Gwyneira", "Gwyneth", "Hafgan", "Hafren", "Heledd", "Hellawes", "Heuldys", "Heulwen", "Heulyn", "Hywela", "Idelle", "Igerna", "Iola", 
                                    "Isolde", "Kelemon", "Kigva", "Ladwys", "Leanne", "Linette", "Llinos", "Llio", "Lowri", "Lysanor", "Mabd", "Mair", "Maledisant", "Mali", "Marged", "Meghan", "Melangell", 
                                    "Meleri", "Meredith", "Meriel", "Modlen", "Modron", "Mon", "Morfudd", "Morgan", "Morgana", "Morgause", "Morvudd", "Morwen", "Myfanwy", "Nerys", "Nesta", "Neued", "Nia", 
                                    "Niamh", "Nimue", "Nona", "Olwen", "Oonagh", "Owena", "Penarddun", "Petra", "Ragnell", "Rathtyen", "Rhan", "Rhawn", "Rhedyn", "Rhiamon", "Rhian", "Rhiannon", "Rhianwen", 
                                    "Rhodd", "Rhonda", "Rhonwen", "Rhosyn", "Rowena", "Sabrinna", "Saeth", "Saffir", "Sarff", "Seren", "Sian", "Sioned", "Siwan", "Talaith", "Talar", "Tanwen", "Tarian", 
                                    "Tarran", "Tegan", "Tegau", "Tegeirian", "Tegwen", "Teleri", "Telyn", "Terrwyn", "Toreth", "Torlan", "Torri", "Trevina", "Tristana", "Vala", "Vanora", "Vivian", 
                                    "Wenda", "Winnifred", "Wynne", "Ygraine", "Ysbail", "Yseult", "Yvayne" ]);
