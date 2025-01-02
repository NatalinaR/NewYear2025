


const correctKeywords = {
    1: "8",
    2: "двацветок",
    3: "си",
    4: "лошадь",
    5: "ораву",
    6: "мастерица",
    7: "инара",
    8: "мюриэл",
    9: "джон",
    10: "6",
    11: "бинки",
    12: "древние",
    13: "шахматы",
    14: "ринсвинд",
    15: "анк-морпорк",
    16: "картошка",
    17: "2015",
    18: "балбес",
    19: "мавт",
    20: "пират",
    21: "цитадель",
    22: "вовке",
    23: "реми",
    24: "9",
    25: "антибиотики",
    26: "100",
    27: "4",
    28: "весы",
    29: "бутерброды",
    30: "луковицу",
    31: "январь"
  };

  const contentFill = {
    1: `<h2>1 Декабря</h2><p>Поздравляю с первым днём зимы! </p>
        <a class="button" href="https://shorturl.at/Fsfq2" target="_blank">Open</a>`,
    2: `<h2>2 Декабря</h2><p>В понедельник вечером здорово посмотреть старую добрую сказку! </p>
        <a class="button" href="https://my.mail.ru/mail/igor.kozyakov/video/45604/222579.html" target="_blank">Open</a>`,
    3: `<h2>3 Декабря</h2><p>Найти подснежники зимой - нелегкое испытание. Справится ли главная героиня? </p>
        <a class="button" href="https://my.mail.ru/inbox/phenix2015/video/17/762.html" target="_blank">Open</a>`,
    4: `<h2>4 Декабря</h2><p>Сегодня день российской информатики! Неофициальный праздник, приуроченный к дате регистрации изобретённой в СССР ЭВМ. </p>
        <a class="button" href="https://my.mail.ru/mail/zemlya18-54/video/10/145.html" target="_blank">Open</a>`,
    5: `<h2>5 Декабря</h2><p>Ватсон спрашивает у Холмса:<br>— Я понимаю почему вор взял из сейфа деньги и драгоценности. Но зачем он забрал жену лорда?<br> — Элементарно, Ватсон! Чтобы лорд его не искал! </p>
        <a class="button" href="https://my.mail.ru/mail/dubasova88/video/1269/31140.html" target="_blank">Open</a>`,
    6: `<h2>6 Декабря</h2><p>Дочь, ты пила?<br>Нет, мам, я топор!</p>
        <a class="button" href="https://ok.ru/video/7844026321438" target="_blank">Open</a>`,
    7: `<h2>7 Декабря</h2><p>Святой отец Пирсу и Ловцу: "Приятного путешествия, ребята, будьте хорошими.А если не получится, будьте осторожны" </p>
        <a class="button" href="https://my.mail.ru/bk/anisa.idrisova/video/28/735.html" target="_blank">Open</a>`,
    8: `<h2>8 Декабря</h2><p> Я требую продолжения банкета! </p>
        <a class="button" href="https://my.mail.ru/mail/ivanovih12333/video/_myvideo/5187.html" target="_blank">Open</a>`,
    9: `<h2>9 Декабря</h2><p>Сегодня день рождения компьютерной мыши! Погладь свою мышь, она так усердно работает </p>
        <a class="button" href="https://my.mail.ru/mail/vanya.shtil/video/_vanswers/1415.html" target="_blank">Open</a>`,
    10: `<h2>10 Декабря</h2><p>Казнить нельзя помиловать! Где же поставить запятую? </p>
        <a class="button" href="https://my.mail.ru/mail/ksu-/video/_myvideo/279.html">Open</a>`,
    11: `<h2>11 Декабря</h2><p>Давайте отпразднуем Международный день гор! </p>
        <a class="button" href="https://vk.com/video-63054301_456239328" target="_blank">Open</a>`,
    12: `<h2>12 Декабря</h2><p>По радио сообщили о переходе на зимнее время, сказав, что «этой ночью, ровно в 03:00 нужно перевести стрелку часов на один час назад, на 02:00».<br> У всех программистов эта ночь зависла в бесконечном цикле. </p>
        <a class="button" href="https://vk.com/video335840340_456239038" target="_blank">Open</a>`,
    13: `<h2>13 Декабря</h2><p>Давайте погрузимся в детство и поможем мальчику выжить в джунглях! </p>
        <a class="button" href="https://my.mail.ru/mail/alecs59russ/video/_myvideo/1844.html" target="_blank">Open</a>`,
    14: `<h2>14 Декабря</h2><p>В субботу можно расслабиться и от души посмеяться! </p>
        <a class="button" href="https://youtu.be/kToZ7LVkcXc?si=gs8VcmCrUQljaaNj" target="_blank">Open</a>`,
    15: `<h2>15 Декабря</h2><p>Поздравляю с Международным днем чая! </p>
        <a class="button" href="https://youtu.be/H5E_qa32bT4?si=oHD_1IsdOa0C0USW" target="_blank">Open</a>`,
    16: `<h2>16 Декабря</h2><p>Новая неделя, и кажется кто-то прячется за углом! </p>
        <a class="button" href="https://vk.com/video47774212_168063685" target="_blank">Open</a>`,
    17: `<h2>17 Декабря</h2><p>Ты кому-нибудь что-нибудь предложишь. Тебе кто-нибудь что-нибудь предложит. Красота. </p>
        <a class="button" href="https://ok.ru/video/7580466940450" target="_blank">Open</a>`,
    18: `<h2>18 Декабря</h2><p>Удержишь в руках инструмент — корабль летучий построишь! - Тоже можно сказать о мотивации и концентрации. Удержишь - добьешься своих целей! </p>
        <a class="button" href="https://my.mail.ru/mail/adjavidan/video/_vfavorites/93964.html" target="_blank">Open</a>`,
    19: `<h2>19 Декабря</h2><p>Подумала, будет забавно спросить про мавт. хаха </p>
        <a class="button" href="https://my.mail.ru/list/agros-premium/video/_myvideo/8289.html" target="_blank">Open</a>`,
    20: `<h2>20 Декабря</h2><p>-Говорят, вам счастья привалило?<br>-Бессо-овестно врут! </p>
        <a class="button" href="https://rutube.ru/video/49e88b137fab307ce4b4a9587e36f8a8/" target="_blank">Open</a>`,
    21: `<h2>21 Декабря</h2><p>Всего 10 дней до Нового Года! </p>
        <a class="button" href="https://my.mail.ru/internet.ru/nina.osetrova/video/4/22751.html" target="_blank">Open</a>`,
    22: `<h2>22 Декабря</h2><p>"Три дня я гналась за вами, чтобы сказать, как вы мне безразличны!" </p>
        <a class="button" href="https://my.mail.ru/mail/elenavorobeva0809632/video/7/1656.html" target="_blank">Open</a>`,
    23: `<h2>23 Декабря</h2><p>Всего 8 дней до Нового Года!!! </p>
        <a class="button" href="https://my.mail.ru/gmail.com/dzuba1226/video/24/11068.html" target="_blank">Open</a>`,
    24: `<h2>24 Декабря</h2><p>Так… ты же козявка… — От козявки слышу! </p>
        <a class="button" href="https://my.mail.ru/mail/sanadoc_61/video/8/9602.html" target="_blank">Open</a>`,
    25: `<h2>25 Декабря</h2><p>Поздравляю с католическим Рождеством! </p>
        <a class="button" href="https://ok.ru/video/3736024844878" target="_blank">Open</a>`,
    26: `<h2>26 Декабря</h2><p>Человек с большой фантазией и ни капли неправды! </p>
        <a class="button" href="https://vk.com/video-224592296_456239138" target="_blank">Open</a>`,
    27: `<h2>27 Декабря</h2><p>Время для истории об одной шляпке! </p>
        <a class="button" href="https://my.mail.ru/gmail.com/dzuba1226/video/24/50176.html" target="_blank">Open</a>`,
    28: `<h2>28 Декабря</h2><p>4 дня до Нового Года! </p>
        <a class="button" href="https://vk.com/video-174023022_456258713" target="_blank">Open</a>`,
    29: `<h2>29 Декабря</h2><p>3 дня до нового года! </p>
        <a class="button" href="https://my.mail.ru/mail/svetlana-rudeva/video/75/32380.html">Open</a>`,
    30: `<h2>30 Декабря</h2><p>2 дня до Нового Года! "-И солнце съешь?!" "-Угу" </p>
        <a class="button" href="https://vk.com/video-75543539_171715779" target="_blank">Open</a>`,
    31: `<h2>31 Декабря</h2><p>И новый год, что вот вот настааааанет. Исполнит вмиг мечту втоюююю. Если снежинка не растаает, в твоей ладони не растааает... </p>
        <a class="button" href="https://vk.com/video-174023022_456259008" target="_blank">Open</a>`
  };









// var d = new Date(); 
// var todaysDate = d.getDate();

var todaysDate = 31;
var target = $('.calendar .day');

console.log(localStorage.getItem('GotActivity'));
console.log(localStorage.getItem('ForPastDays'));


target.each(function(){
    var day = $(this).html();

    if (todaysDate == day){

        $(this).addClass('today');
        console.log(day, 'today');

        if (localStorage.getItem(`Day ${day}`) == 'yes'){
            $(this).addClass('active');

            console.log($(this).hasClass('active'))

            localStorage.setItem('ForPastDays', 'active');
        }
    }

    if (todaysDate < day){
      $(this).addClass('future');
      console.log(day, 'future');
    }

    if (todaysDate > day){
        console.log(day, 'past');

        $(this).addClass('past'); 
        if (localStorage.getItem('ForPastDays') == 'active'){
            $(this).addClass('active');
        }
      }
  });


$('.calendar .day').click(function() {
    const self = $(this);

    var day = self.html();


    // console.log(localStorage.getItem(`Day ${day}`));

    
    if ($(this).hasClass('today') && localStorage.getItem(`Day ${day}`)!=='yes') {
        
      
        var day = $(this).html();
        $('#keywordWodal').addClass('active');
    
        showModal(day);


        document.getElementById("keywordInput").addEventListener("keydown", function(event) {
        
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent the default form submission behavior
            
                const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
                const correctKeyword = correctKeywords[currentBox];
            
            if (enteredKeyword === correctKeyword) {

                
                showMessage(day);

                localStorage.setItem(`Day ${day}`, "yes");
                localStorage.setItem('GotActivity', 'active');
                localStorage.setItem('ForPastDays', 'active');
                localStorage.setItem('ANSW', 'TRUE');
                const modal = document.getElementById("keywordModal");
                modal.style.display = "none";

                self.addClass('active');
        
            } else {
                document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
                document.getElementById("feedbackMessage").style.color = "white";
                localStorage.setItem('ANSW', 'FALSE');
            }
            
            }
        });


        $('.checkAnsw').click(function(){
            const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
            const correctKeyword = correctKeywords[currentBox];
        
        if (enteredKeyword === correctKeyword) {
            
            showMessage(day);


            localStorage.setItem(`Day ${day}`, 'yes');
            localStorage.setItem('GotActivity', 'active');
            localStorage.setItem('ForPastDays', 'active');

            localStorage.removeItem('ANSW');

            console.log(localStorage.getItem(`Day ${day}`));
        

            const modal = document.getElementById("keywordModal");
            modal.style.display = "none";

            self.addClass('active');



        } else {
            document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
            document.getElementById("feedbackMessage").style.color = "white";
            localStorage.setItem('ANSW', 'FALSE');
        }
        }); 

    } else if (localStorage.getItem(`Day ${day}`)!=='yes' && $(this).hasClass('past')){
        console.log('jump jump 149')
        console.log(localStorage.getItem(`Day ${day}`));
        console.log('tadaa');

        var day = $(this).html();
        $('#keywordWodal').addClass('active');
    
        showModal(day);


        document.getElementById("keywordInput").addEventListener("keydown", function(event) {
        
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent the default form submission behavior
            
                const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
                const correctKeyword = correctKeywords[currentBox];
            
            if (enteredKeyword === correctKeyword) {
                
                showMessage(day);

                localStorage.setItem(`Day ${day}`, "yes");
                localStorage.setItem('GotActivity', 'active');
                localStorage.setItem('ForPastDays', 'active');

                localStorage.setItem('ANSW', 'TRUE');
                const modal = document.getElementById("keywordModal");
                modal.style.display = "none";

                self.addClass('active');


        
            } else {
                document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
                document.getElementById("feedbackMessage").style.color = "white";
                localStorage.setItem('ANSW', 'FALSE');
            }
            
            }
        });


        $('.checkAnsw').click(function(){
            const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
            const correctKeyword = correctKeywords[currentBox];
        
        if (enteredKeyword === correctKeyword) {
            
            showMessage(day);


            localStorage.setItem(`Day ${day}`, 'yes');
            localStorage.setItem('GotActivity', 'active');
            localStorage.setItem('ForPastDays', 'active');

            localStorage.removeItem('ANSW');

            console.log(localStorage.getItem(`Day ${day}`));
        

            const modal = document.getElementById("keywordModal");
            modal.style.display = "none";

            self.addClass('active');


        } else {
            document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
            document.getElementById("feedbackMessage").style.color = "white";
            localStorage.setItem('ANSW', 'FALSE');
        }
        }); 

    } else if (localStorage.getItem(`Day ${day}`)=='yes' && !$(this).hasClass('future')){

        showMessage(day);
    }
    else if ($(this).hasClass('future')) {
        console.log('future');
        $('#modal').addClass('active');
        // $('#modal .wrapper .wrappercontent .box').html("<h2>Who is this handsome naughty boy, who trying see what coming :o</h2> <p>Szabi, it's too early to open this day ^^ <br>Meow<br></p>");
        $('#modal .wrapper .wrappercontent .box').html("<h2>Пока рановато пытаться открыть это окошко. Как наступит день и будет письмо с кодом, тогда и откроете. Хихи</p>");
     

    } 
});
 
  // Show the modal and set the current box
  let currentBox = null;
  function showModal(boxNumber) {
    currentBox = boxNumber;
    document.getElementById("boxNumber").textContent = boxNumber;
    document.getElementById("keywordInput").value = "";
    document.getElementById("feedbackMessage").textContent = "";
    document.getElementById("keywordModal").style.display = "block";
   

  } 

  function showMessage (nummer) {
    const filled = contentFill[nummer];

    $('#modal').addClass('active');

    $('#modal .wrapper .wrappercontent .box').html('');
    $('#modal .wrapper .wrappercontent .box').html(filled);
  }
 
 $('.close').click(function(){
   var ultimateParent = $(this).parent().parent().parent();
   ultimateParent.addClass('moveOut');
   setTimeout(function(){
     ultimateParent.removeClass('moveOut').removeClass('active');
   },250);
 });

 $('#modal').click(function(){
    var ultimateParent = $(this);
    ultimateParent.addClass('moveOut');
    setTimeout(function(){
      ultimateParent.removeClass('moveOut').removeClass('active');
    },250);
  });


 window.onclick = function(event) {
    const modal = document.getElementById("keywordModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


  

