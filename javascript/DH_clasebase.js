class ClaseBase {
	constructor(clase) {
		this._nombre = clase.nombre;
		this._energia = clase.energia;
		this._salud = clase.salud;
		this._atributo = clase.atributo;
		this._cordura = clase.cordura;
		this._competencias = clase.competencias;
		this._ventajas = clase.ventajas;
		this._habilidades = clase.habilidades;
		this._lhabilidades = clase.lhabilidades;
		this._origen = clase.origen;
		this._descripcion = clase.descripcion;
		this._nombresF = clase.nombresF;
		this._nombresM = clase.nombresM;
	}
	
	get nombresF() {
		return this._nombresF;
	}
	
	get nombresM() {
		return this._nombresM;
	}
	
	get descripcion() {
		return this._descripcion;
	}	
	
	get origen() {
		return this._origen;
	}	
		
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get energia() {
		return this._energia;
	}	
	set energia(value) {
		this._energia = value;
	}
	
	get salud() {
		return this._salud;
	}	
	set salud(value) {
		this._salud = value;
	}	
	
	get atributo() {
		return this._atributo;
	}	
	set atributo(value) {
		this._atributo = value;
	}	

	set cordura(value) {
		this._cordura = value;
	}
	get cordura() {
		return this._cordura;
	}	
	
	get competencias() {
		return this._competencias;
	}
	
	get ventajas() {
		return this._ventajas;
	}	
	
	get habilidades() {
		return this._habilidades;
	}	

	get lhabilidades() {
		return this._lhabilidades;
	}	
}


class ClasesBases {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Bárbaro",
			  energia : 4,
			  salud : 12,
			  atributo: [ "FUE", "DES", "CON" ],
			  competencias: [ "Puedes llevar cualquier arma cuerpo a cuerpo, arcos cortos, cerbatanas y hondas, además de armaduras hasta el cuero tachonado. Puedes equipar escudos pequeños y medianos." ],
			  ventajas: [ "<strong>Tiradas de Fuerza</strong> para romper objetos.", "<strong>Tiradas de Sabiduría</strong> para detectar trampas o peligros.", "<strong>Tiradas de Caza</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Brutalidad</strong><br/> Cuando falles una tirada de Fuerza para causar daño a una criatura, puedes destruir completamente el arma que estés blandiendo —sin importar su condición— para causar daño con ella automáticamente. Puedes declarar el uso de esta habilidad justo después de fallar.", "<strong>Poderío salvaje</strong><br/>Obtienes +1 a la Efectividad de cualquier arma cuerpo a cuerpo a dos manos que utilices para atacar.", "<strong>Rabia primigenia</strong><br/>Puedes enrabietarte durante tantosasaltos como 1 + tu nivel.<br/>Cuando estás rabioso, obtienes Ventaja en las tiradas de ataque cuerpo a cuerpo, causas 1d4 de daño cuerpo a cuerpo adicional y tienes Desventaja para esquivar ataques a distancia y resistir efectos de conjuros.<br/>Este daño usa la Efectividad de tu arma y aumenta a d6 a partir del sexto nivel, a d8 a partir del duodécimo nivel, a d10 a partir del decimoctavo nivel y a d12 a partir del vigésimo cuarto nivel.<br/>Eres capaz de rabiar una vez al día; no obstante, puedes gastar puntos de energía para enfurecerte más veces." ],
			  lhabilidades: [ "Brutalidad, Poderío salvaje, Rabia primigenia" ],
			  cordura: "SAB",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>", 
			  descripcion: "Vienes de tierras indómitas en la que la ley del más fuerte es lo único que se conoce. Has pasado tu infancia luchando para sobrevivir y tus vivencias hacen que la civilización te sea extraña e incomprensible." + 
							" Has aprendido a matar antes que a hablar, lo que hace de tu pragmatismo una filosofía chocante para los urbanitas.<br/> Los tejemanejes de la gran ciudad te levantan un insoportable dolor de cabeza, pero no echas de menos la vida en las" +
							" estepas heladas o páramos desérticos de los que provienes. Prefieres celebrar los logros inmediatos, regodearte en la gloria de un buen combate y acabar con aquellos que amenazan lo tuyo. A pesar de tu rudeza, tus aliados te aprecian, y tú a ellos, siempre y cuando respeten tu particular código de honor.",
			  nombresF: [ "Anya", "Bertha", "Helga", "Sashka", "Valeria", "Zuri" ],
			  nombresM: [ "Aethe", "Frothak", "Morgulf", "Vavfir", "Skörn", "Thaddeus" ],
							
			},
			{
			  nombre : "Bardo",
			  energia : 4,
			  salud : 6,
			  atributo: [ "CAR" ],
			  competencias: [ "Puedes llevar cualquier arma ligera, bastones, espadas largas y roperas, jabalinas, látigos y cualquier arma a distancia.<br/>Te puedes poner armaduras acolchadas, armaduras de cuero, armaduras de cuero tachonado y cotas de anillas." ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para evitar el daño por trampas.", "<strong>Tiradas de Carisma</strong> para resistir el encantamiento." ],
			  habilidades: [ "<strong>Argucias de bardo</strong><br/>Has aprendido un par de trucos arcanos de bajo nivel durante tus viajes. Elige dos conjuros de la siguiente lista: Burla cruel , Mano de mago , Leer magia , Luz o Remendar.<br/>Puedes lanzar cualquiera de estos dos tantas veces al día como puntos de energía tengas cuando te despiertas. El nivel aplicado para los efectos de estos conjuros será 1 y la característica será Carisma.", "<strong>Cultura del viajero</strong><br/>Una vez al día, cuando debas realizar una tirada de Atributo relacionada con conocer un dato, buscar en un lugar, conocer a alguien o interrogar a un individuo, puedes declarar que algo sabías de ello y obtener un +2 a esa tirada (bajo aprobación del Árbitro).", "<strong>Entusiasmo</strong><br/>Inspiras, ya sea mediante unas palabras de ánimo, un chascarrillo divertido o un grito de esperanza, a un objetivo ubicado a 60 pies (18 metros) o menos de ti, otorgándole un Dado de entusiasmo durante tantos asaltos como tu Nivel.<br/>Debes gastar un punto de energía para activar este efecto; solo puedes otorgar un Dado de entusiasmo a un único objetivo y éste solo puede beneficiarse de un único Dado de entusiasmo.<br/>Si le das el Dado de entusiasmo a otro objetivo, el primero lo pierde irremediablemente.<br/>El objetivo puede usar el Dado de entusiasmo para sumar el resultado de la tirada a uno de sus Atributos. Una vez utilizado el Dado de entusiasmo, se consume.", "<strong>Melodías mágicas</strong><br/>Conoces el secreto de grabar sutiles notas arcanas en las fibras de la urdimbre mágica, generando efectos increíbles usando tu música. Encontrarás las reglas para tocar canciones más adelante en este documento. En la Tabla de progreso del bardo puedes ver cuantas canciones distintas conoces." ],
			  lhabilidades: [ "Argucias de bardo, Cultura del viajero, Entusiasmo" ],
			  cordura: "CAR",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>", 
			  descripcion: "Eres un aventurero que ha entrado en comunión con la urdimbre mágica a través de las canciones y tu música. Viajas de un lugar a otro, registrando historias y sagas legendarias para aumentar tu repertorio de conocimientos, dejando huella en cada población que visitas.<br/>" +
"A pesar de la desconfianza que despiertas allá por dónde vas, la presencia de un bardo es agradecida por los ciudadanos comunes, pues cualquier mortal aprecia una buena actuación o una tonada sobre las hazañas de un héroe.<br/>" +
"Gracias a tu talento místico eres capaz de elaborar sortilegios a través de tu arte, que no dudas en emplear para adornar el espectáculo.<br/>" + 
"Al ser un viajero, reúnes un montón de conocimientos interesantes que te ayudan a sobrevivir durante las largas caminatas. Tus habilidades de combate son famosas, demostrando que eres un combatiente ducho sin miedo a los duelos.",
			  nombresF: [ "Ariana", "Bimba", "Fiorella", "Germanotta", "Modestia", "Soshana" ],
			  nombresM: [ "Alhigas", "Dreyfus", "Jaafan", "Marius", "Nerón", "Uriel" ],
			},
			{
			  nombre : "Belisario",
			  energia : 4,
			  salud : 8,
			  atributo: [ "FUE", "INT", "CAR" ],
			  competencias: [ "Puedes llevar cualquier arma existente y armadura hasta la cota de mallas. También puedes equiparte escudos pequeños y medios." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para reconocer puntos débiles en tus enemigos.", "<strong>Tiradas de Carisma</strong> para asegurar y/o reforzar la lealtad de tus seguidores.", "<strong>Tiradas de Iniciativa</strong> del grupo en combates en los que participes activamente como líder." ],
			  habilidades: [ "<strong>Presencia intimidante</strong><br/>Cuando una unidad aliada falle un chequeo de Moral o una unidad enemiga supere un chequeo de Moral, puedes gastar un punto de energía para cambiar el resultado a uno favorable para tu equipo.", "<strong>Órdenes de batalla</strong><br/>Mientras tus aliados y tú estáis enfrascados en un combate puedes espetar órdenes concretas para reubicar a unidades aliadas, animar a un compañero herido o ejecutar un ataque conjunto.<br/>Para ello, el objetivo de tus órdenes debe estar a 60 pies (18 metros) o menos de ti, ser capaz de entender lo que le estás diciendo y querer obedecer tus instrucciones.<br/>Para activar las Órdenes de batalla puedes superar una prueba de Carisma o gastar un punto de energía; cualquiera de la dos opciones es válida, pero debes declararla antes de tirar o gastar. Dar órdenes consume por completo tu acción ese asalto y su beneficio se agota al siguiente.<ul><li><strong>¡Ataca!</strong>El objetivo realiza un ataque cuerpo a cuerpo contra el objetivo más cercano con un +1 a la tirada de ataque. Esta bonificación aumenta en +1 a los niveles undécimo, vigésimo primero y trigésimo primero, hasta un total de +4.</li><li><strong>¡Ten cuidado!</strong>El objetivo obtiene +1 a la Efectividad de su armadura para la próxima tirada de Absorción.</li><li><strong>¡Por aquí!</strong>El objetivo se mueve hacia un punto que tú designes y pueda llegar usando su movimiento.</li><li><strong>¡Vuelve en ti!</strong>El objetivo realiza una tirada de reacción para librarse de un efecto nocivo que le esté afectando en ese momento.</li><li><strong>¡Aguanta!</strong>El objetivo realiza una tirada de Constitución: si la supera, obtiene 1d4 puntos de salud temporales que se desvanecerán en 2 asaltos. El dado empleado aumenta a d6 a partir del undécimo nivel, a d8 a partir del vigésimo primer nivel y a d10 a partir del trigésimo primer nivel." ],
			  lhabilidades: [ "Presencia intimidante, Órdenes de batalla" ],
			  cordura: "INT",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Desde que tienes uso de razón has tenido que tomar decisiones que otros ni siquiera se atrevieron a tomar. Eres un maestro del campo de batalla, no el mejor combatiente pero sí el que tiene la sangre fría para saber cuando tirar la toalla y cuando atacar con todas sus fuerzas.<br/>Probablemente tengas entrenamiento militar: quizás has sido miembro de la milicia de tu aldea o has nacido en una familia dedicada al cuerpo. Sin importar qué, tú sabes que la guerra es tu elemento natural.<br/>Sabes lo que tienes que hacer cuando agarras con fuerza tu escudo y tu estandarte: guiar a tu compañía hasta la victoria, dirigiendo con sabiduría y temple cuando las horas aciagas llegan. Tus bramidos resuenan por todo el campo de batalla. Eres el señor de la guerra, un belisario.",
			  nombresF: [ "Brienne", "Ceres", "Terra", "Martina", "Nêrra", "Xenobia" ],
			  nombresM: [ "Arcturus", "Cócito", "Ebenezer", "Locke", "Ichabod", "Tormund" ],
			},
			{
			  nombre : "Brujo",
			  energia : 2,
			  salud : 6,
			  atributo: [ "CON", "CAR" ],
			  competencias: [ "Puedes llevar cualquier arma ligera, bastones, espadas largas, espadas roperas, látigos, guadañas, cerbatanas y hondas; y te puedes equipar armaduras acolchadas y armaduras de cuero." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para resistir enfermedades.", "<strong>Tiradas de Inteligencia</strong> para descifrar conjuros o rituales mágicos." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>Tu patrón te ha concedido la capacidad de lanzar conjuros. Comienzas con dos conjuros de nivel 1 y aprendes uno nuevo cada nivel.<br/>No puedes aprender nuevos conjuros ni necesitas memorizarlos: tu patrón te ha hecho entrega de puntos de brujería, que consumes para lanzar conjuros. Recuperas todos tus puntos tras descansar adecuadamente durante ocho horas.<br/>En la Tabla de progreso del brujo puedes ver cuántos puntos tienes y el nivel máximo de conjuro que puedes lanzar al día. Tus atributos para las tiradas de conjuros considerados de Mago es Constitución, mientras que para las tiradas de conjuros considerados de Clérigo es Carisma.", "<strong>Esbirro familiar</strong><br/>Además de tus poderes arcanos, tu patrón te ha otorgado una criatura mágica que actúa como tu secuaz. Elige qué tipo de ser es, como un diablillo, una mota de tierra y viento o un hada sombría para que el Árbitro pueda interpretarlo como un personaje más de tu historia.<br/>Tu familiar es capaz de flotar a voluntad, tiene la mitad de salud máxima que tú y se puede mover libremente o a tus órdenes en tu asalto. Durante el combate, puedes gastar un punto de energía para lanzar un conjuro desde la ubicación en la que se encuentra tu familiar en lugar de lanzarlo desde tu ubicación.<br/>Si es reducido a 0 puntos de salud o menos resucitará en dos días y sacrificas 1d4 puntos de Constitución o Carisma a tu patrón mediante un ritual privado y blasfemo. Carecer de familiar te provoca Desventaja en todas las tiradas de conjuro.", "<strong>Rebote arcano</strong><br/>Si fallas una tirada de conjuro, puedes gastar un punto de energía para poder volver a repetirla y quedarte con el resultado que más te convenga." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Esbirro familiar, Rebote arcano" ],
			  cordura: "INT",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Has vendido tu alma a una entidad preternatural para obtener dominio sobre las artes oscuras. Mientras que otros estudiantes de lo arcano deben estudiar enormes tomos y practicar durante décadas, tú has tomado un atajo, condenando tu espíritu a un más que probable tormento eterno.<br/>Firmaste un pacto de sangre con tu patrón y debes cumplir con lo que has prometido; a cambio de sus dones se te exigirán sacrificios y actos abominables.<br/>Pero conoces tu lugar: eres un brujo, un intruso de la magia.",
			  nombresF: [ "Angélica", "Circe", "Jalis", "Locasta", "Morgana", "Rita" ],
			  nombresM: [ "Alastor", "Belegur", "Fabián", "Gwyon", "Raymond", "Teseo" ],
			},
			{
			  nombre : "Cazador",
			  energia : 3,
			  salud : 6,
			  atributo: [ "DES", "SAB" ],
			  competencias: [ "Puedes llevar todas las armas ligeras, armas cuerpo a cuerpo de una mano, guadañas, gujas, tridentes y armas a distancia. Te puedes poner armaduras acolchadas, de cuero, de pieles y de cuero tachonado, además de escudos pequeños." ],
			  ventajas: [ "<strong>Tiradas de Sabiduría</strong> para seguir un rastro.", "<strong>Tiradas de Caza</strong> en las Tierras Salvajes.", "<strong>Tiradas de Orientación</strong> en cualquier lugar salvo en zonas subterráneas." ],
			  habilidades: [ "<strong>Compañero animal</strong><br/>Una bestia te acompaña desde que era prácticamente un cachorro. Decide qué clase de criatura es junto al Árbitro y qué motivos os lleva a compartir una amistad tan especial. Tu compañero tiene el mismo nivel que tú y, dependiendo de su especie, tendrá unos puntos de salud y causará un daño en concreto.<br/>Puedes hacer que tu compañero actúe como si fuese un personaje más durante tu turno, ya que comparte iniciativa contigo, siempre y cuando estéis a 50 pies (15 m) o menos el uno del otro. Si no puedes darle órdenes, tu compañero usará su acción para acercarse lo más posible a ti.<br/>Tu compañero animal utiliza tu puntuación de Sabiduría para realizar ataques y puedes gastar un punto de energía para que active una habilidad especial.<br/>En caso de que tu compañero fallezca deberás guardar luto durante una semana (tu Carisma obtendrá +1 permanente), después podrás comenzar a buscar un nuevo aliado.<br/>El Árbitro te indicará cuanto tiempo necesitarás y, quizás, pueda dar lugar a una aventura interesante.<br/> En la Página 73 encontrarás una tabla con ejemplos de Compañero animal.", "<strong>Marca del cazador</strong><br/>Puedes gastar un punto de energía para designar como tu presa a un objetivo que puedas ver y se encuentre a 100 pies (30 m) o menos de ti. Mientras esa criatura sea tu presa todos los ataques que realices contra ella tú o tu bestia aumentarán su Efectividad en 1 y causarán 1d6 puntos de daño adicional.<br/>A partir del décimo nivel el daño adicional aumenta a 2d6, a partir del vigésimo nivel aumenta a 3d6 y a partir del trigésimo nivel aumenta a 4d6.<br/>La marca se disipará cuando el objetivo sea derrotado, tus puntos de salud se reduzcan a 0 o menos, alguno de los dos se aleje del otro 300 pies (90 m) o anules la marca voluntariamente." ],
			  lhabilidades: [ "Compañero animal, Marca del cazador" ],
			  cordura: "SAB",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Durante toda tu vida has sido uno con la naturaleza, preocupándote en proteger los territorios salvajes y especializándote en mantener el equilibrio entre depredadores y presas. Quizás has nacido entre habitantes del bosque o perteneces a una tribu de cazadores.<br/>Eres muy hábil con el arco y has formado un vínculo especial con una bestia salvaje, que ha acabado siendo una extensión más de ti y los dos habéis formado una singular pareja bastante letal.",
			  nombresF: [ "Avana", "Dora", "Isarrel", "Saria", "Valindrys", "Yralisia" ],
			  nombresM: [ "Anfalen", "Corym", "Haldir", "Ruan", "Torlus", "Wilfred" ],
			},
			{
			  nombre : "Celador",
			  energia : 2,
			  salud : 4,
			  atributo: [ "DES", "CON", "SAB" ],
			  competencias: [ "Puedes utilizar cualquier arma arrojadiza, cualquier arma a distancia y armas cuerpo a cuerpo ligeras. Te puedes equipar armaduras acolchadas y de cuero, pero ningún escudo." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para recuperar energía.", "<strong>Tiradas de Sabiduría</strong> para detectar la presencia de corrupción mágica." ],
			  habilidades: [ "<strong>Arma de celador</strong><br/>Elige el tipo de arma en la que tus maestros te han entrenado: arco corto, arco largo o armas arrojadizas (bumerangs, cuchillos alados, etc.). Causas +1 al daño cuando ataques con dicho tipo de arma y, en caso de ser un arma arrojadiza,siempre regresará a ti tras arrojarla si es capaz.", "<strong>Flechería arcana</strong><br/>Eres capaz de preparar munición especial o imbuir armas arrojadizas con magia extraída de la urdimbre. Ver pág. 74.<br/>Puedes preparar proyectiles especiales si te concentras durante un Intervalo y gastas un punto de energía; estos proyectiles tienen una vida útil de un año desde que son creados, ya que atas espíritus menores a ellos. No debes ser interrumpido mientras dura la preparación, debes cumplir sus requisitos y superar una tirada de Sabiduría por cada uno.<br/>Solo funcionan con tu Arma de celador, para otro individuo serán versiones normales de flechas o armas arrojadizas.<br/>Consulta la Tabla de progreso del celador para ver cuantas recetas conoces y cuantos proyectiles puedes preparar.<br/>Toda arma arrojadiza o flecha preparada con Flechería arcana se considera mágica a efectos de reglas, además de sus efectos adicionales." ],
			  lhabilidades: [ "Arma de celador, Flechería arcana" ],
			  cordura: "SAB",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Perteneces a una estirpe de guerreros excepcionales que han perfeccionado la manipulación de la urdimbre y el combate a distancia, creando una técnica inimitable. Puedes haberte unido a los celadores por vocación, tradición u obligación, pero cargas con su responsabilidad a tu espalda: eres un defensor de los espíritus ancestrales.<br/>Allá dónde la corrupción inmoral impregne la urdimbre es dónde bogas, viajando de un territorio a otro cazando a los que alteran la capa espiritual del mundo.<br/>Tus ancestros —que te entregan su fuerza— pueden ser espectros del mundo antiguo, ánimas de los bosques o fantasmas aullantes de un páramo desolado.<br/>Tus habilidades distancia son apreciadas en cualquier grupo de aventureros, más bien tus obligaciones pueden chocar con sus intereses: tienes una misión que cumplir y harás todo lo posible porque tus antepasados continúen protegiendo la urdimbre.",
			  nombresF: [ "Ayla", "Dihnunah", "Fern", "Nimara", "Sevsda", "Yun" ],
			  nombresM: [ "Elerion", "Findorian", "Stavos", "Theon", "Vaelar", "Zack" ],
			},
			{
			  nombre : "Chamán",
			  energia : 3,
			  salud : 6,
			  atributo: [ "CON", "SAB" ],
			  competencias: [ "Puedes llevar cualquier arma hecha de madera, armaduras hasta las de pieles y escudos pequeños o medianos hechos de madera." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para identificar criaturas venenosas o peligrosas.", "<strong>Tiradas de Sabiduría</strong> para reconocer el entorno en zonas salvajes.", "<strong>Tiradas de Forrajeo</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>A partir del segundo nivel, tu espíritu ancestral te concede la capacidad de lanzar conjuros. Comienzas con un conjuro de nivel 1 y aprendes uno nuevo cada nivel.<br/>No puedes aprender nuevos conjuros ni necesitas memorizarlos: tu ancestro te ha hecho entrega de puntos de chamanismo, que consumes para lanzar conjuros.<br/>Recuperas todos tus puntos de chamanismo gastados tras descansar adecuadamente durante ocho horas.<br/>En la Tabla de progreso del chamán puedes ver cuántos puntos de chamanismo tienes y el nivel máximo de conjuro que puedes lanzar al día. Tus atributos para las tiradas de conjuros considerados de Mago es Constitución, mientras que para las tiradas de conjuros considerados de Clérigo es Sabiduría.", "<strong>Avatar ancestral</strong><br/>Además de tus poderes primigenios, tu espíritu ancestral se materializa como un animal tangible. Elige qué clase de bestia es, como una pantera negra, un lobo feroz o un corpulento oso grizzly, para que el Árbitro pueda interpretarlo como un personaje más de tu historia.<br/>El avatar tiene la mitad de salud que tú y se puede mover libremente o a tus órdenes en tu asalto. Durante el combate, puedes gastar un punto de energía para lanzar un conjuro desde la ubicación en la que se encuentra tu familiar en lugar de lanzarlo desde tu ubicación.<br/>Si es reducido a 0 puntos de salud o menos, se desvanecerá en cenizas translúcidas y volverá a formarse tras dos Intervalos. Cuando ocurra esto, tu Constitución y Sabiduría aumentarán en 1.", "<strong>Resonancia salvaje</strong><br/>Cuando lances un conjuro que restaure salud o proporcione algún efecto beneficioso a una criatura que no seas tú, puedes gastar un punto de energía para recibir el mismo efecto en ti." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Avatar ancestral, Resonancia salvaje" ],
			  cordura: "SAB",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Tienes un vínculo místico con el mundo de los espíritus, convirtiéndote en un intermediario entre el reino de la carne y lo que hay más allá de la Urdimbre. Quizás seas el curandero ermitaño de una tribu de bárbaros o un aprendiz de magia primigenia; sin importar qué, el vínculo que compartes con la energía natural es fuerte y palpable en ti.<br/>Albergas una sabiduría inusual, primitiva e instintiva. Has forjado una alianza con un espíritu bestial, que actúa como pilar de tus hechizos. Eres un guía, un sanador, un líder y un defensor del mundo natural. Consideras a la civilización una lenta plaga que va consumiendo las tierras salvajes y crees que quizás seas el único que aún escucha los aullidos del planeta.",
			  nombresF: [ "Awilix", "Chac", "Itzmaná", "Kantunil", "Jo", "Zulia" ],
			  nombresM: [ "Babajide", "Chimalmat", "Jotok", "Mactzil", "Nicteel", "Yaxcol" ],
			},
			{
			  nombre : "Clérigo",
			  energia : 3,
			  salud : 6,
			  atributo: [ "SAB" ],
			  competencias: [ "Puedes llevar cualquier arma roma o escudo. Además, puedes equiparte armaduras acolchadas, armaduras de cuero, armaduras de cuero tachonado, armaduras de pieles, camisotes de mallas, cotas de escamas, corazas y protecciones parciales de placas." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para evitar la parálisis o el daño causado por el veneno." ],
			  habilidades: [ "<strong>Expulsar a los muertos vivientes</strong><br/>Puedes gastar un punto de energía y emplear una acción para expulsar a los muertos vivientes a 60 pies (18 metros) cuyo nivel sea igual o inferior al tuyo.<br/>Para lograrlo, necesitas superar una tirada de Sabiduría. Un muerto viviente expulsado tiene una probabilidad de 18+ de ser destruido. De no suceder esto, debe correr lo más lejos posible de ti durante 1 intervalo (6 asaltos) o hasta que dejes de ser visible.", "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros. En la tabla de la página siguiente puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 (57 ed. básica)." ],
			  lhabilidades: [ "Expulsar a los muertos vivientes, Lanzamiento de conjuros" ],
			  cordura: "SAB",
			  origen: "Dungeon Hack", 
			  descripcion: "Te has entregado con devoción al servicio religioso, participando en la batalla eterna que enfrenta a las fuerzas primordiales del mundo.<br/>" +
					"Tal vez hagas la voluntad de un único dios o tal vez la de un panteón completo. Es posible incluso que adores conceptos abstractos —como el «fuego» o el «bien»— o que reverencies a tus ancestros, a los espíritus del mundo o que sigas una filosofía aún más abstracta.<br/>" + 
					"Independientemente de tus creencias, tu devoción y fuerza de voluntad te proporcionan la capacidad de obrar verdaderos milagros",
			  nombresF: [ "Arlia", "Beulah", "Elise", "Erlyna", "Iktar", "Iudith", "Leah" ],
			  nombresM: [ "Aran", "Baltaros", "Brinas", "Derridan", "Goran", "Teoddal", "Wesner" ],
			},
			{
			  nombre : "Druida",
			  energia : 3,
			  salud : 6,
			  atributo: [ "SAB" ],
			  competencias: [ "Puedes llevar cualquier arma roma o escudo siempre que no estén fabricados con metales. Además, puedes equiparte armaduras acolchadas, armaduras de cuero o armaduras de pieles." ],
			  ventajas: [ "<strong>Tiradas de Forrajeo</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Espíritu animal</strong><br/>Puedes comunicarte con los animales. Aunque te entiendas con ellos, esto no supone que vayan a ser más amistosos contigo, ni que te vayan a obedecer. De igual forma, puedes gastar un punto de energía y emplear una acción para convertirte en un animal a tu elección de nivel igual o inferior al tuyo durante, al menos, 1 hora por nivel. Mientras estés bajo la forma animal conservas tus características y tu salud, adquiriendo sus habilidades innatas. Para lograrlo deberás lograr conectar con el espíritu totémico del animal, superando una tirada de Sabiduría.", "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros. En la tabla de la página 15 del suplemento <a href='https://drive.google.com/file/d/1yzPJIvU0lcOZ2cN1KGMAmGvganf8cAMr/view' target='_blank'>Generador de poblaciones para Dungeon Hack</a> puedes encontrar el número de conjuros que eres capaz de memorizar cada día, en la página 14 del mismo suplemento puedes encontrar la lista de conjuros.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 de la Edición Completa de Dungeon Hack (pág. 57 de la Edición Básica)." ],
			  lhabilidades: [ "Espíritu animal, Lanzamiento de conjuros" ],
			  cordura: "SAB",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/03/recurso-generador-de-poblaciones-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Eres uno con la naturaleza. Un filósofo y teólogo que ha asumido el ministerio de la cultura animista de tus antepasados. Pero también eres considerado, entre los tuyos, un juez, un maestro, curandero y adivino. Un sacerdote de lo mundano que acompaña a su devotos por el camino de la vida.<br/>Construyes tus altares en el interior de grutas y bosques y tus poderes te permiten conocer el estado del clima, aparecer con forma animal o predecir el futuro entre otros prodigios.",
			  nombresF: [ "Alanna", "Eileen", "Bryana", "Gwenhwyar", "Caeli", "Cinnia", "Erin", "Treva", "Maeve" ],
			  nombresM: [ "Galvan", "Quinn", "Perth", "Niall", "Artai", "Aldair", "Kilian", "Aod", "Fergal" ],
			},
			{
			  nombre : "Guerrero",
			  energia : 4,
			  salud : 8,
			  atributo: [ "FUE" , "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen." ],
			  ventajas: [ "<strong>Tiradas de Fuerza</strong> para derribar puertas.", "<strong>Tiradas de Constitución</strong> para recuperar energía.", "<strong>Tiradas de Caza</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Sacrificar escudo</strong><br/>Cuando falles una tirada de Destreza para evitar el daño de un ataque, puedes destruir completamente un escudo que tengas en tu mano —sin importar la categoría de DU que tenga— para ignorar todo el daño de dicho ataque. Debes declarar el uso de esta habilidad en lugar de realizar la tirada de Absorción.", "<strong>Recuperación</strong><br/>Tras un combate, puedes gastar un punto de energía y emplear un intervalo descansando para recuperar 1d6 puntos de Salud.", "<strong>Rajar</strong><br/>A partir del quinto nivel, cuando hagas un ataque sobre un objetivo, puedes causar el mismo daño a un enemigo a tu alcance de un nivel igual o inferior al objetivo inicial. Desde el décimo nivel, puedes causar el mismo daño a dos enemigos a tu alcance y, desde el decimoquinto, hasta a tres enemigos. Con esta habilidad puedes causar daño al mismo enemigo varias veces." ],
			  lhabilidades: [ "Sacrificar escudo, Recuperación, Rajar" ],
			  cordura: "SAB",
			  origen: "Dungeon Hack", 
			  descripcion: "Bien seas un ágil duelista o una ruda soldado, un caballero de brillante armadura o una exploradora de gran puntería, has recibido un buen entrenamiento en el arte de la lucha y manejas con soltura una gran cantidad de armas.<br/>" +
				"Puedes aguantar en combate mucho más tiempo que el resto de tus aliados, por lo que no es extraño verte en primera línea de batalla.",
			  nombresF: [ "Alice", "Berenice", "Briyra", "Everaine", "Kara", "Pelagia", "Yala" ],
			  nombresM: [ "Adamar", "Darien", "Galthin", "Haldir", "Lysander", "Zale" ],
			},
			{
			  nombre : "Hechicero",
			  energia : 3,
			  salud : 4,
			  atributo: [ "INT", "CAR" ],
			  competencias: [ "Puedes llevar bastones, ballestas ligeras, clavas, dagas, espadas cortas, látigos, hondas y varitas." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para resistir efectos mágicos de naturaleza elemental (debes elegir un elemento concreto).", "<strong>Tiradas de Carisma</strong> para resistir el encantamiento." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros debido a tu sangre mágica. Sin embargo, no preparas tus hechizos como lo hacen otros arcanistas: empleas tu canal natural con la urdimbre para lanzarlos.<br/>Posees un Dado de Uso denominado <strong>Dado de hechicería</strong>, que debes tirar cada vez que lanzas un conjuro. Empieza en d4 y aumenta un rango en los niveles sexto, undécimo, décimo sexto y vigésimo primero, hasta un máximo de d12.<br/>Cada vez que lances un conjuro, debes tirar tu Dado de hechicería. Si el resultado es igual o menos al nivel de conjuro lanzado +1, tu Dado de hechicería se reduce un rango.<br/>Comienzas con dos conjuros de nivel 1 y aprendes uno nuevo cada nivel. Consulta la Tabla de progreso del hechicero para averiguar cuál es el nivel máximo de conjuros que puedes aprender.<br/>Tu atributo para las tiradas de conjuro es Carisma y no puedes añadir nuevos conjuros leyendo pergaminos: no tienes libro de conjuros, almacenas tu conocimiento en tu alma.", "<strong>Canal sortílego</strong><br/>Cuando se agote tu Dado de hechicería puedes gastar un punto de energía y emplear un asalto en renovar tus poderes arcanos, restaurando tu Dado de hechicería a su rango máximo actual.<br/>Cuando debas realizar una tirada de Constitución para recuperar energía y hayas gastado uno de esos puntos en tu Canal sortílego obtienes Ventaja en la tirada." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Canal sortílego" ],
			  cordura: "CAR",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "En los albores de la creación la urdimbre mágica no existió hasta que un ser de inconmensurable poder tejió una red intangible que abarcaba toda la realidad.<br/>Desde ese momento comenzaron a existir aquellos que nacían con hebras de energía arcana entre sus fibras: los hechiceros.<br/>Tú eres uno de ellos, un hijo de la magia que es capaz de manipular el tejido mágico de la existencia para evocar sortilegios a voluntad. No necesitas comprender los misterios de la hechicería como otros arcanistas, tú eres la magia misma.",
			  nombresF: [ "Batseba", "Discordia", "Lorif", "Margott", "Nura", "Talis" ],
			  nombresM: [ "Ethro", "Forlang", "Maverae", "Orión", "Sakon", "Zunari" ],
			},
			{
			  nombre : "Ladrón",
			  energia : 4,
			  salud : 4,
			  atributo: [ "DES" ],
			  competencias: [ "Puedes llevar todas las armas de proyectiles, armas cuerpo a cuerpo de una mano y armaduras acolchadas, armaduras de cuero y armaduras de cuero tachonado." ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para trepar, abrir cerraduras con ganzúa y para desactivar trampas.", "<strong>Tiradas de Iniciativa</strong> del grupo en combates en los que participe activamente.", "<strong>Tiradas de Orientación</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Combate con dos armas</strong><br/>Siempre que uses en cada mano un arma ligera —por ejemplo, dos dagas—, aumentas tu eficiencia en +1.", "<strong>Ataque sorpresa</strong><br/>Cuando atacas por sorpresa a una criatura, puedes gastar un punto de energía para realizar un ataque furtivo. Este ataque se realiza con ventaja y añade 1d4 al daño. Al alcanzar el quinto nivel, su daño adicional aumenta hasta 1d6, al décimo hasta 1d8, al decimoquinto hasta 1d10 y al vigésimo hasta 1d12.<br/>El daño adicional provocado por los ataques furtivos utiliza el mismo valor de eficiencia que las armas con las que se ataque." ],
			  lhabilidades: [ "Combate con dos armas, Ataque sorpresa" ],
			  cordura: "CAR",
			  origen: "Dungeon Hack", 
			  descripcion: "Independientemente de tu clase social de procedencia, has aprendido mucho acerca de cómo funcionan las calles —y las personas—.<br/>" +
				"Puede que cometas actos deshonrosos como robar o engañar, o tal vez utilices tus habilidades tan solo para poner un poco las cosas a tu favor.<br/>" +
				"No hay mucha gente que asegure querer tratar contigo, pero cuando se trata de sobrevivir y alcanzar lugares peligrosos no existe nadie mejor que tú. Odiarán admitirlo, pero siempre te miran a ti cuando las cosas se ponen realmente feas.",
			  nombresF: [ "Cora", "Imra", "Keyara", "Liana", "Marila", "Rinya", "Tressa" ],
			  nombresM: [ "Bal", "Daarenno", "Delbin", "Dymas", "Egrad", "Haladavar", "Merreth" ],
			},
			{
			  nombre : "Mago",
			  energia : 2,
			  salud : 4,
			  atributo: [ "INT" ],
			  competencias: [ "Puedes portar bastones, dagas, hondas y varitas." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para ver si conoces un idioma y para recordar información sobre una criatura o tipo de monstruo." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros. En la tabla de la página siguiente puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 (57 ed. básica).", "<strong>Meditación</strong><br/>Si meditas durante un intervalo y gastas un punto de energía, puedes recuperar un conjuro que hayas gastado" ],
			  lhabilidades: [ "Lanzamiento de conjuros, Meditación" ],
			  cordura: "INT",
			  origen: "Dungeon Hack", 
			  descripcion: "El estudio y la investigación de las artes arcanas te han proporcionado la capacidad de utilizar y lanzar conjuros. Cada mañana, al despertarte, repasas tu pesado libro de conjuros, almacenando en tu memoria aquellos que vas a utilizar durante ese día.<br/>A pesar de tu aspecto frágil, eres quien guía a los demás cuando os enfrentáis a misterios desconocidos.<br/>Si logras acumular el suficiente conocimiento mágico, llegará un momento en el que poseas un conjuro para cada situación peligrosa.",
			  nombresF: [ "Ahrorlah", "Dhai", "Edea", "Megara", "Moyra", "Taeryna", "Thera" ],
			  nombresM: [ "Cleophas", "Dyn", "Herafos", "Jehoash", "Karpos", "Silas", "Zaltaros" ],
			},
			{
			  nombre : "Monje",
			  energia : 4,
			  salud : 8,
			  atributo: [ "DES", "CON" ],
			  competencias: [ "Eres competente en todas las armas conocidas, pero no tienes competencia en ningún tipo de armadura ni escudo." ],
			  ventajas: [ "<strong>Tiradas de Sabiduría</strong> para descubrir mentiras y detectar engaños e ilusiones.", "<strong>Tiradas de Constitución</strong> para evitar la muerte del personaje." ],
			  habilidades: [ "<strong>Defensa sin armadura</strong><br/>Al principio de cada combate puedes gastar un punto de energía para <em>endurecer tu cuerpo</em> y ganar valores de absorción como si llevaras armadura, hasta el final de dicho combate. Desde el primer nivel hasta el quinto, tu valor de absorción será d4, a partir del quinto hasta el décimo será d6, a partir del décimo hasta el décimo quinto será d8 y a partir del décimo quinto el valor será d12.", "<strong>Ráfaga de golpes</strong><br/> A partir del quinto nivel, cuando hagas un ataque con tus puños sobre un objetivo, puedes realizar un ataque adicional a un enemigo a tu alcance. Desde el décimo nivel puedes realizar dos ataques adicionales y, a partir del decimoquinto puedes realizar hasta tres ataques adicionales. Con esta habilidad puedes atacar al mismo oponente varias veces.", "<strong>Puño de hierro</strong><br/>Cuando ataques con tus puños desnudos el daño varía según el nivel, desde el primer nivel hasta el quinto el daño es D4, desde el quinto nivel hasta el décimo será d6, a partir del décimo hasta el vigésimo será d8, a partir del vigésimo hasta el vigésimo quinto será d10 y a partir del vigésimo quinto será d12." ],
			  lhabilidades: [ "Defensa sin armadura, Ráfaga de golpes, Puño de hierro" ],
			  cordura: "SAB",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/03/recurso-generador-de-poblaciones-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Como miembro de una antigua orden monástica sigues una estricta disciplina, buscando la máxima expresión en la perfección del cuerpo y la mente.<br/>Enclaustrado en un monasterio alejado de la civilización, has sentido la llamada de la aventura, buscando la iluminación en tus viajes por el mundo. En el exterior te esperan las lecciones vitales y el enriquecimiento espiritual necesarios para conseguirlo.",
			  nombresF: [ "Lian", "Huan", "Kumiko", "Wei", "Akame", "Mei", "Xia", "Yin" ],
			  nombresM: [ "Tian", "Xing", "Yuan", "Shen", "Bao", "Shaoran", "Zhao", "Fai" ],
			},
			{
			  nombre : "Nigromante",
			  energia : 2,
			  salud : 4,
			  atributo: [ "INT", "SAB" ],
			  competencias: [ "Puedes llevar bastones, clavas, dagas, hoces y guadañas." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para identificar conjuros, monstruos o rituales relacionados con la no muerte.", "<strong>Tiradas de Constitución</strong> para resistir enfermedades o venenos." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros. En la tabla de la página siguiente (ver clase nigromante en El Naufragio) puedes encontrar el número de conjuros que eres capaz de memorizar cada día. Tu característica para lanzar conjuros es Inteligencia, comienzas conociendo tres conjuros de Nivel 1 y aprendes uno nuevo cada nivel.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 57 del manual de Dungeon Hack..", "<strong>Susurro de la tumba</strong><br/>Puedes gastar un punto de energía y emplear una acción para controlar a los muertos vivientes en un radio de 60 pies (18 metros) alrededor de ti, cuyo nivel sea igual o inferior al tuyo. Para lograrlo, necesitas superar una tirada de Sabiduría; si el ser tiene un mínimo de conciencia, la tirada sufre Desventaja.<br/>Un muerto viviente controlado tiene una probabilidad de 12+ de desmoronarse al entrar bajo tu dominio. De no suceder esto, lo podrás controlar durante un Intervalo durante tu asalto; estos seres emplean el reglamento de Compañero animal que podrás encontrar en la página 73 de la Guía del jugador de Ylat.<br/>Puedes controlar un muerto viviente de esta forma; a partir de nivel 6 podrás controlar dos muertos vivientes, mientras que a partir de nivel 11 podrás controlar a tres muertos vivientes y, a partir de nivel 21, podrás controlar a cuatro muertos vivientes." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Susurro de la tumba" ],
			  cordura: "CAR",
			  origen: "<a href='https://naufragio.net/clases-nigromante/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Comenzaste a estudiar las artes arcanas pero pronto te zambulliste en el conocimiento prohibido y en los rituales profanos. Abrazando la muerte como forma de tejer tus hechizos, te has convertido en un arcanista abominable que manipula la vida y la muerte para conseguir lo que quiere.<br/>" +
"Tus prácticas te hacen un blasfemo y profanador, pero has perdido el interés por la moralidad y los asuntos mundanos. Los mortales son una pieza más para completar tus planes. Eres un heraldo de la muerte, un nigromante.",
			  nombresF: [ "Altea", "Caelia", "Eri", "Galatea", "Nirvoxia", "Xalandra" ],
			  nombresM: [ "Andrei", "Daern", "Heth", "Malus", "Viktor", "Zarathra" ],
			},
			{
			  nombre : "Oráculo",
			  energia : 4,
			  salud : 4,
			  atributo: [ "INT", "SAB" ],
			  competencias: [ "Puedes llevar bastones, clavas, hondas, mayales, mazas y látigos; te puedes equipar armaduras acolchadas." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para resistir enfermedades.", "<strong>Tiradas de Sabiduría</strong> para discernir mentiras o ilusiones." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros debido a tu presencia divina. Sin embargo, no preparas tus hechizos como lo hacen otros arcanistas: empleas tu conexión milagrosa para lanzarlos.<br/>Posees un Dado de Uso denominado <strong>Dado de prodigios</strong>, que debes tirar cada vez que lanzas un conjuro. Empieza en d4 y aumenta un rango en los niveles séptimo, décimo tercero y décimo noveno, hasta un máximo de d10.<br/>Cada vez que lances un conjuro debes tirar tu Dado de prodigios . Si el resultado es igual o menor al nivel de conjuro lanzado, tu Dado de prodigios se reduce un rango.<br/> Comienzas con tres conjuros de nivel 1 y aprendes uno nuevo cada nivel impar.<br/>Consulta la Tabla de progreso del oráculo para averiguar cuál es el nivel máximo de conjuros que puedes aprender.<br/>Tu atributo para las tiradas de conjuro es Sabiduría y no puedes añadir nuevos conjuros leyendo pergaminos: no tienes libro de conjuros, tu conocimiento mágico proviene de la llama divina que arde en tu interior.", "<strong>Plegaria suplicante</strong><br/>Cuando se agote tu Dado de prodigios puedes ponerte de rodillas y suplicar a tu fuego interior que renueve tus fuerzas divinas. Debes gastar un punto de energía y rezar durante un intervalo para restaurar tu Dado de prodigios a su rango máximo actual.<br/> Cuando debas realizar una tirada de Constitución para recuperar energía y hayas gastado uno de esos puntos en la plegaria, obtienes Ventaja para la tirada." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Plegaria suplicante" ],
			  cordura: "SAB",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Desde tu más tierna infancia has sentido que estabas siendo preparado para algo más. Los sacerdotes de tu pueblo se reunían a tu alrededor para estudiarte, para entrar en sintonía con las fuerzas divinas que moraban en tu interior.<br/>No fue hasta la madurez cuando entendiste lo que eras: una deidad (o varias) te eligió como vasija para interactuar con el mundo. Quizás eres su mensajero o estás destinado a traerlo de vuelta. No importa cómo, has dejado atrás tu comunidad para averiguar qué función tienes el mundo y debes averiguarlo trabajando con tus inusuales dones.",
			  nombresF: [ "Diana", "Eritea", "Lorain", "Melpos", "Nébula", "Parice", "Teresse" ],
			  nombresM: [ "Az’or", "Crixo", "Fintarion", "Galater", "Mun’ozz", "Perseo" ],
			},
			{
			  nombre : "Paladín",
			  energia : 3,
			  salud : 10,
			  atributo: [ "FUE", "CON", "CAR" ],
			  competencias: [ "Puedes usar cualquier tipo de arma, armadura y escudo." ],
			  ventajas: [ "<strong>Tiradas de Fuerza</strong> para apresar o retener oponentes.", "<strong>Tiradas de Destreza</strong> para cabalgar o dirigir una montura.", "<strong>Tiradas de Constitución</strong> para resistir enfermedades o venenos." ],
			  habilidades: [ "<strong>Desafío divino</strong><br/>Cargas con la responsabilidad de defender al débil y castigar a los injustos.<br/>Puedes gastar un punto de energía para canalizar la energía sagrada de tu deidad y retar a un oponente en combate singular.<br/>El villano afectado por tu desafío deberá enzarzarse en una lucha cuerpo a cuerpo contigo o sufrirá Desventaja en todas sus tiradas de ataque contra otro objetivo que no seas tú.<br/>Tu Desafío divino durará hasta que el objetivo sea derrotado o tú caigas inconsciente. Puedes anular este mandato divino simplemente deseándolo, pero tu deidad o tu orden no se lo tomarán a bien.", "<strong>Imposición de manos</strong><br/>Tu toque es capaz de sanar milagrosamente las heridas de otros. Puedes gastar un punto de energía y una acción para tocar a otra criatura, haciendo que recupere 1d4 puntos de salud.<br/>A partir del onceavo nivel esta curación milagrosa aumenta a 2d4, mientras que a partir del vigésimo primero nivel pasa a ser 3d4. Finalmente, a partir del trigésimo primero aumenta a 4d4.<br/>Si tu alineamiento es Caótico puedes decidir que, en lugar de recuperar salud, causar daño absorbiendo la vida de la criatura. Debes hacer esta elección en el momento de crear tu personaje y no podrás cambiarla más adelante.", "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros. En la Tabla de progreso del paladín puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas el Capítulo 4 del manual de Dungeon Hack Edición Básica o en la Página 44 de la Edición Deluxe.<br/>No necesitas tener las manos libres ni hacer gestos con las manos para lanzar conjuros, aunque sí debes contar con el favor de tu deidad o tu orden." ],
			  lhabilidades: [ "Desafío divino, Imposición de manos, Lanzamiento de conjuros" ],
			  cordura: "CAR",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>Ylat - Naufragio</a>",
			  descripcion: "Perteneces a una orden de caballeros que ha jurado lealtad a una deidad o a un concepto abstracto, como el honor, la guerra o la muerte, y eres uno de sus campeones. Así, debes mostrar ejemplo como el adalid de tu fe, respetando las creencias y preceptos de tu credo.<br/>" +
				"Los motivos para que te hayas embarcado en busca de aventuras pueden ser muy variados, pero siempre dependerán de los intereses de tu orden. Quizás estás buscando una reliquia o debas recuperar unas tierras consideradas santas.",
			  nombresF: [ "Adelle", "Berenice", "Cassandra", "Katherin", "Mildred", "Zelda" ],
			  nombresM: [ "Antoine", "Edward", "Fëanâro", "Phillip", "Theodor", "Xenos" ],
			},
			{
			  nombre : "Sacerdote",
			  energia : 3,
			  salud : 4,
			  atributo: [ "SAB" ],
			  competencias: [ "Puedes llevar cualquier arma a una mano roma, hondas y escudos pequeños." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para recordar información religiosa.", "<strong>Tiradas de Carisma</strong> para evitar la desmoralización de tus aliados." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>A partir del segundo nivel, la orden eclesiástica te concede la capacidad de lanzar conjuros. Comienzas conociendo dos conjuros de nivel 1 y aprendes uno nuevo cada nivel.<br/>No puedes aprender nuevos conjuros ni necesitas memorizarlos: tu orden te ha adiestrado en el uso de un recurso denominado puntos de divinidad, que consumes para lanzar conjuros. Recuperas todos tus puntos de divinidad gastados tras descansar adecuadamente durante ocho horas.<br/>En la tabla de progreso del Sacerdote puedes ver cuántos puntos de divinidad tienes, y el nivel máximo de conjuro que puedes lanzar al día. Tus atributos para las tiradas de conjuros considerados arcanos es Inteligencia, mientras que para las tiradas de conjuros considerados divinos es Sabiduría." ,
							 "<strong>Vía sacerdotis</strong><br/>Los sacerdotes, a diferencia del resto de clérigos, siguen una senda concreta que les ayuda a definir sus habilidades y su conocimiento divino. Cada Vía sacerdotis proporciona una habilidad distinta al sacerdote y altera su lista de conjuros.<br/>" + 
							 "<u><em>Vía rigorosae</em></u>- Tus milagros poseen la capacidad de reforzar el espíritu de aquellos a los que bendices. Cada vez que sanes a un aliado mediante tus conjuros de curación, dicho aliado obtendrá +1 Absorción durante tantos Asaltos como tu nivel. Esta bonificación no es acumulable si se sana repetidas veces al mismo objetivo y no se renueva con cada sanación.<br/>" + 
							 "<u><em>Vía sacra</em></u>- Respetas la memoria de tu deidad con entereza y autodeterminación. Eres capaz de tejer la urdimbre a voluntad para contener luz curativa en el interior de tus aliados. Cada vez que proporciones un efecto beneficioso a un aliado mediante tus conjuros, dicho aliado obtendrá una esfera de sanación durante tantos Asaltos como tu nivel. Dicha esfera se liberará la próxima vez que reciba daño, sanando 1d4 de salud por cada diez de tus niveles. Esta bonificación no es acumulable si se proporciona repetidas veces un efecto beneficioso al mismo objetivo.<br/>" +
							 "<u><em>Vía umbra</em></u>- Tu fe es inquebrantable, pero sabes que la oscuridad es la otra cara de la luz. No te importa adentrarte en conocimientos prohibidos o blasfemos si es para encontrar nuevos métodos de defensa. Cada vez que dañes a un enemigo mediante tus conjuros, dicho enemigo sufrirá 1 punto de daño adicional por cada cinco de tus niveles." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Vía sacerdotis (Vía rigorosae, Vía sacra, Vía umbra)" ],
			  cordura: "CAR",
			  origen: "<a href='https://naufragio.net/clases-sacerdote/' target='_blank'>El Naufragio</a>",
			  descripcion: "Eres un miembro de una orden eclesiástica que sirve a un Espíritu deífico concreto y a sus fieles. Aunque encuentras la comodidad en tu templo, obrando como diácono para tu hermandad, no es extraño que dejes atrás tu hogar para apoyar a tus aliados y a tu orden en tierras destrozadas por la guerra o la vileza.<br/>" +
						   "Tu maestría con las artes sanatorias rivaliza con tu capacidad para canalizar las artes oscuras y doblegarlas a tu voluntad. Sabes que la oscuridad no puede existir sin la luz y viceversa. El Espíritu deífico al que adoras te otorga libertad para que obres como consideres, pero sabes que vigila de cerca tus actos.",
			  nombresF: [ "Acacia", "Celinne", "Eulalia", "Hildegarda", "Lorain", "Salomé." ],
			  nombresM: [ "Cayo", "Democritus", "Lazare", "Orestes", "Probo", "Timoteus" ],
			},
			{
			  nombre : "Berserkr",
			  energia : 3,
			  salud : 12,
			  atributo: [ "FUE", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, y escudo pequeño o medianos." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para recuperar energía.", "<strong>Tiradas de Carisma</strong> para intimidar." ],
			  habilidades: [ "<strong>Furia de Berserkr</strong><br/>Gasta 1 punto de energía para entrar en un estado de furia asesina. Dura tantos asaltos como tu nivel. Una vez hayan pasado estos turnos puedes elegir gastar más puntos para alargar la duración de tu estado de furia otra cantidad de asaltos igual a tu nivel por cada punto gastado.<br/>Mientras estés en este estado de furia tienes ventaja en todas las tiradas de características físicas y la efectividad de tus armas cuerpo a cuerpo aumenta en 1, mientras que todas tus tiradas de características mentales tienendesventaja.<br/>Una vez termine este estado, bien porque decidas terminarlo o bien porque no te queden puntos de energía quedas fatigado durante tantos intervalos como puntos de energía hayas gastado de este modo.<br/>No puedes alcanzar el estado de furia si usas cualquier tipo de equipo con el que no seas competente.", "<strong>Piel de oso</strong><br/>Mientras no lleves ningún tipo de armadura tienes un valor de absorción de daño de d4 en nivel 1. Este valor aumenta a d6 en nivel 5, d8 en nivel 10, d10 en nivel 15 y d12 en nivel 20.<br/>Puedes llevar un escudo pequeño o mediano y seguir beneficiándote de este talento.", "<strong>Matagigantes</strong><br/>A partir del quinto nivel, cuando hagas un ataque sobre un objetivo, puedes causar el mismo daño a un enemigo a tu alcance de un nivel igual o inferior al objetivo inicial. Desde el décimo nivel, puedes causar el mismo daño a dos enemigos a tu alcance y, desde el decimoquinto, hasta a tres enemigos.<br/>Con esta habilidad puedes causar daño al mismo enemigo varias veces." ],
			  lhabilidades: [ "Furia de Berserkr, Piel de oso, Matagigantes" ],
			  cordura: "SAB",
			  origen: "Parvus Domus - <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Los guerreros sagrados de Odihn. Estos furibundos guerreros no se detendrán ante nada para destrozar a sus enemigos.",
			  nombresF: [ "Astrid", "Brenda", "Brynja", "Engla", "Elin", "Erika", "Gerda", "Gudrun", "Gunilda", "Helga", "Helmi", "Hilda", "Inga", "Ingrid", "Kaira", "Karen", "Kaysa", "Lena", "Nilsa", "Sigrid", "Siriana", "Torhild", "Tyra", "Yvette" ],
			  nombresM: [ "Axe", "Bjorn", "Egil", "Erik", "Harald", "Ivar", "Jorgen", "Lars", "Olav", "Sigurd", "Sven" ],
			},
			{
			  nombre : "Vikingr",
			  energia : 4,
			  salud : 10,
			  atributo: [ "FUE", "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, todas las armaduras excepto las de placas y escudos pequeños y medianos." ],
			  ventajas: [ "No tienes desventaja cuando estás luchando en una plataforma inestable.", "<strong>Tiradas de orientación</strong> en el mar y manejar barcos." ],
			  habilidades: [ "<strong>Hermanos de armas</strong><br/>Siempre que luches junto a un aliado adyacente tienes un bonificador de +2 en las tiradas de ataque.<br/>", "<strong>Doble hachazo</strong><br/> Cuando equipes un arma en cada mano aumentas la eficiencia de tu arma principal en 1. Y ganas una absorción de daño de 1.<br/>", "<strong>Determinación</strong><br/>Cuando luchas, eres imparable, y transmites esa sensación a tus enemigos. Todas las criaturas que hayan probado tu acero obtienen un -1 a su puntuación de Moral durante el resto del combate." ],
			  lhabilidades: [ "Hermanos de armas, Doble hachazo, Determinación" ],
			  cordura: "SAB",
			  origen: "Parvus Domus - <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Marineros y guerreros, estos bravos incursores llegarán hasta el fin del mundo en busca de oro y gloria.",
			  nombresF: [ "Astrid", "Brenda", "Brynja", "Engla", "Elin", "Erika", "Gerda", "Gudrun", "Gunilda", "Helga", "Helmi", "Hilda", "Inga", "Ingrid", "Kaira", "Karen", "Kaysa", "Lena", "Nilsa", "Sigrid", "Siriana", "Torhild", "Tyra", "Yvette" ],
			  nombresM: [ "Axe", "Bjorn", "Egil", "Erik", "Harald", "Ivar", "Jorgen", "Lars", "Olav", "Sigurd", "Sven" ],
			},
			{
			  nombre : "Hirdman",
			  energia : 4,
			  salud : 10,
			  atributo: [ "FUE", "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos." ],
			  ventajas: [ "<strong>Tiradas de Carisma</strong> para tratar con otros hirdman y nobles.", "<strong>Tiradas de Sabiduría</strong> para detectar emboscadas." ],
			  habilidades: [ "<strong>Muro de escudos</strong><br/>Siempre que lleves un escudo equipado ganas un bonificador de +2 en las tiradas de Defensa.", "<strong>Interponerse</strong><br/>Una vez por asalto, cuando un enemigo ataque a uno de tus aliados que esté adyacente a tí, puedes elegir recibir tu el ataque. Tienes derecho a la tirada de defensa como si te hubieran atacado a tí desde el principio.", "<strong>Venganza</strong><br/>A partir de nivel 5, una vez por asalto, cuando recibas un ataque, tienes derecho a atacar a la criatura que te atacó tan pronto se resuelva el ataque original. A partir de nivel 10 tienes derecho a usar este talento dos veces por asalto. A partir de nivel 15 tienes derecho a usarlo hasta tres veces por asalto." ],
			  lhabilidades: [ "Muro de escudos, Interponerse, Venganza" ],
			  cordura: "SAB",
			  origen: "Parvus Domus - <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Los hirdman son guardaespaldas de élite. Ningún enemigo burlará su defensa.",
			  nombresF: [ "Astrid", "Brenda", "Brynja", "Engla", "Elin", "Erika", "Gerda", "Gudrun", "Gunilda", "Helga", "Helmi", "Hilda", "Inga", "Ingrid", "Kaira", "Karen", "Kaysa", "Lena", "Nilsa", "Sigrid", "Siriana", "Torhild", "Tyra", "Yvette" ],
			  nombresM: [ "Axe", "Bjorn", "Egil", "Erik", "Harald", "Ivar", "Jorgen", "Lars", "Olav", "Sigurd", "Sven" ],
			},
			{
			  nombre : "Veidimadr",
			  energia : 4,
			  salud : 8,
			  atributo: [ "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas de proyectiles, armas cuerpo a cuerpo de una mano y armaduras acolchadas, armaduras de cuero y armaduras de cuero tachonado." ],
			  ventajas: [ "<strong>Tiradas de Orientación</strong> en las tierras salvajes.", "<strong>Tiradas de Destreza</strong> para ocultarse y moverse en silencio.", "<strong>Tiradas de Caza</strong> en las tierras salvajes." ],
			  habilidades: [ "<strong>Vista de águila</strong><br/>Tienes un bonificador de +2 en tus tiradas de ataque a distancia.", "<strong>Ataque sorpresa</strong><br/>Cuando atacas por sorpresa a una criatura, puedes gastar un punto de energía para realizar un ataque furtivo.<br/>Este ataque se realiza con ventaja y añade 1d4 al daño. Al alcanzar el quinto nivel, su daño adicional aumenta hasta 1d6, al décimo hasta 1d8, al decimoquinto hasta 1d10 y al vigésimo hasta 1d12.<br/>El daño adicional provocado por los ataques furtivos utiliza el mismo valor de eficiencia que las armas con las que se ataque." ],
			  lhabilidades: [ "Vista de águila, Ataque sorpresa" ],
			  cordura: "SAB",
			  origen: "Parvus Domus - <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Los bosques helados de Escandia son tan bellos como peligrosos. Cualquier viajero inexperto está destinado a perderse y morir en ellos sin la ayuda de un Veidimadr.",
			  nombresF: [ "Astrid", "Brenda", "Brynja", "Engla", "Elin", "Erika", "Gerda", "Gudrun", "Gunilda", "Helga", "Helmi", "Hilda", "Inga", "Ingrid", "Kaira", "Karen", "Kaysa", "Lena", "Nilsa", "Sigrid", "Siriana", "Torhild", "Tyra", "Yvette" ],
			  nombresM: [ "Axe", "Bjorn", "Egil", "Erik", "Harald", "Ivar", "Jorgen", "Lars", "Olav", "Sigurd", "Sven" ],
			},
			{
			  nombre : "Volva",
			  energia : 2,
			  salud : 6,
			  atributo: [ "SAB" ],
			  competencias: [ "Puedes portar bastones, dagas, hondas y varitas." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para reconocer presagios o discernir lo oculto.", "<strong>Tiradas de Carisma</strong> para convencer, engañar o seducir." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/> Puedes lanzar conjuros. Usa la tabla a continuación (página 12 del <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>documento EinherHack</a>) para saber el número de conjuros que eres capaz de memorizar cada día.<br/>Tu característica para lanzar conjuros es la Sabiduría.<br/>Las volvas conocen cuatro conjuros que pueden memorizar a nivel 1, y cada nivel aprenden un nuevo conjuro.<br/> Las reglas que deben seguirse para lanzar conjuros están descritas en la página 69 del manual de Dungeon Hack (57 ed. básica).", "<strong>Magia rúnica</strong><br/>Puedes lanzar cualquier hechizo que conozcas y puedas lanzar, y tenga una duración de un intervalo o superior, realizando un ritual en el que inscribes las runas adecuadas en el objetivo de tu conjuro. Esto te lleva 3 intervalos y no requiere que hayas memorizado ese hechizo para ese día ni consume el hueco de conjuro memorizado correspondiente." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Magia rúnica" ],
			  cordura: "SAB",
			  origen: "Parvus Domus - <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "El poder de las Volvas se transmite de madre a hija. Son la voz de los dioses, leen las runas e interpretan prodigios.<br/>Expulsan el mal de alma y cuerpo.",
			  nombresF: [ "Astrid", "Brenda", "Brynja", "Engla", "Elin", "Erika", "Gerda", "Gudrun", "Gunilda", "Helga", "Helmi", "Hilda", "Inga", "Ingrid", "Kaira", "Karen", "Kaysa", "Lena", "Nilsa", "Sigrid", "Siriana", "Torhild", "Tyra", "Yvette" ],
			  nombresM: [ ],
			},
			{
			  nombre : "Thurl",
			  energia : 2,
			  salud : 6,
			  atributo: [ "CON" ],
			  competencias: [ "Puedes usar cualquier arma ligera o bastón y vestir armadura de cuero o de pieles." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para resistir los elementos.", "<strong>Tiradas de Carisma</strong> para tratar con animales." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/> Puedes lanzar conjuros. Usa la tabla a continuación (página 15 del <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>documento EinherHack</a>) para saber el número de conjuros que eres capaz de memorizar cada día.<br/>Tu característica para lanzar conjuros es la Inteligencia.<br/>Conoces cuatro conjuros que puedes memorizar a nivel 1, y cada nivel aprenden un nuevo conjuro.<br/> Las reglas que deben seguirse para lanzar conjuros están descritas en la página 69 del manual de Dungeon Hack (57 ed. básica).", "<strong>Ritos antiguos</strong><br/>Tus conocimientos sobre los ritos antiguos y tu cercanía con el mundo de la mierte hacen que tus hechizos de curación sean especialmente poderosos, aumentan su efectividad en 1." ],
			  lhabilidades: [ "Lanzamiento de conjuros, Ritos antiguos" ],
			  cordura: "INT",
			  origen: "Parvus Domus - <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Estos ermitaños poseen conocimientos sobre la naturaleza y los ritos antiguos. Preparan remedios naturales y ofician los ritos funerarios y los sacrificios.",
			  nombresF: [  ],
			  nombresM: [ "Axe", "Bjorn", "Egil", "Erik", "Harald", "Ivar", "Jorgen", "Lars", "Olav", "Sigurd", "Sven" ],
			},
			{
			  nombre : "Skald",
			  energia : 2,
			  salud : 6,
			  atributo: [ "CAR" ],
			  competencias: [ "Puedes usar armas ligeras, armaduras hasta cuero tachonado y escudos pequeños." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para recordar leyendas o reconocer que algo o alguien es parte de una.", "<strong>Tiradas de Carisma</strong> para tratar convencer, engañar o seducir." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/> Puedes lanzar conjuros. Usa la tabla a continuación (página 18 del <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>documento EinherHack</a>) para saber el número de conjuros que eres capaz de memorizar cada día.<br/>Tu característica para lanzar conjuros es el Carisma.<br/>Un skald conoce cuatro conjuros que puedes memorizar a nivel 1, y cada nivel aprenden un nuevo conjuro.<br/> Las reglas que deben seguirse para lanzar conjuros están descritas en la página 69 del manual de Dungeon Hack (57 ed. básica).", "<strong>El cántico del skald</strong><br/>Tu forma de lanzar hechizos son las canciones y leyendas, puedes lanzar hechizos sin necesidad de tener ninguna mano libre, puesto que no necesitas realizar gestos o dibujar runas mágicas. Es necesario que el objetivo de tu conjuro pueda oirte para poder usar esta habilidad, en caso de que no pueda por la razón que sea, lanzarás los hechizos de la forma habitual." ],
			  lhabilidades: [ "Lanzamiento de conjuros, El cántico del skald" ],
			  cordura: "CAR",
			  origen: "Parvus Domus - <a href='https://www.lospergaminosdelfenix.com/2018/12/recurso-einherhack-clases-y-ficha-para.html' target='_blank'>Los pergaminos del Fénix</a>",
			  descripcion: "Los skalds son artistas viajeros que extienden los relatos de los aventureros por el mundo. Ninguna hazaña se convierte en leyenda si no la cuenta un skald.",
			  nombresF: [ "Astrid", "Brenda", "Brynja", "Engla", "Elin", "Erika", "Gerda", "Gudrun", "Gunilda", "Helga", "Helmi", "Hilda", "Inga", "Ingrid", "Kaira", "Karen", "Kaysa", "Lena", "Nilsa", "Sigrid", "Siriana", "Torhild", "Tyra", "Yvette" ],
			  nombresM: [ "Axe", "Bjorn", "Egil", "Erik", "Harald", "Ivar", "Jorgen", "Lars", "Olav", "Sigurd", "Sven" ],
			},
		]
	}
	
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
	}
	/*
	clase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this._clases.length; iclases++) {
			if ( this._clases[iclases].nombre == nombre ) {
				return new Clase(this._clases[iclases]);
			}
		}
		return new Clase(this._clases[Comun.random(this._clases.length, 0)]);
	} */
}

