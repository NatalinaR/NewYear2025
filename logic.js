// const correctKeywords = {
//     1: "slowpoke",
//     2: "1996",
//     3: "kiwi",
//     4: "apple",
//     5: "110",
//     6: "glasses",
//     7: "me",
//     8: "chicken",
//     9: "pig",
//     10: "bullfinch",
//     11: "green",
//     12: "blin",
//     13: "pink",
//     14: "banana",
//     15: "purple",
//     16: "beaver",
//     17: "37",
//     18: "2",
//     19: "reverse99",
//     20: "just",
//     21: "giraffe",
//     22: "701291809",
//     23: "692",
//     24: "unicorn",
//     25: "triceratops",
//     26: "7",
//     27: "elephant",
//     28: "hat",
//     29: "146",
//     30: "schatz",
//     31: "1582"
//   };

//   const contentFill = {
//     1: `<h2>1 December</h2><p>Happy first winter day, Szabi! <br>Number of today box is:843 </p>
//         <a class="button" href="https://youtu.be/DRWIeVBzU_8?si=jf1m-pfR-BdzBxqu" target="_blank">Open</a>`,
//     2: `<h2>2 December</h2><p>You know, Szabi, I'm really proud of you! And here one funny fact for you: <br>all polar bears are left handed.<br>Number of today surprise is: 279</p>
//         <a class="button" href="https://youtu.be/AFgmVxCgU7M?si=8vVpjoegoZ2oorNI" target="_blank">Open</a>`,
//     3: `<h2>3 December</h2><p>If you think I sleep a lot, look on snail. It can sleep for whole three years XD<br>Number of today box is: 397</p>
//         <a class="button" href="https://youtu.be/3BmxbmedMMc?si=478CUILF8iZAStDF" target="_blank">Open</a>`,
//     4: `<h2>4 December</h2><p>I was sure you will know the answer. Hope you have an apple to eat it now :o<br>Number of today box is: 179</p>
//         <a class="button" href="https://www.youtube.com/live/DbiKrRUNFuE?si=wkhddIxVU_lIPEcR" target="_blank">Open</a>`,
//     5: `<h2>5 December</h2><p>It's thuuursday!!! CLeaning day aaaaand a day to eat something tasty :D<br>Say key word "SWEETY" to me and wait <3<br>Number of today box is: 327</p>
//         <a class="button" href="https://youtu.be/l-d-L5DMak4?si=G_YGM6W4Ibqfg26w" target="_blank">Open</a>`,
//     6: `<h2>6 December</h2><p>After long week how about to watch something funny and relaxing?<br>Number of today box is: 541</p>
//         <a class="button" href="https://youtu.be/hRi_Xrs73yw?si=QjGgj7SPylveMDmK" target="_blank">Open</a>`,
//     7: `<h2>7 December</h2><p>Saturday is a movie time :D Enjoy ^^<br>Number of today box is: 394</p>
//         <a class="button" href="https://9movies.top/movie/jingle-all-the-way-18978" target="_blank">Open</a>`,
//     8: `<h2>8 December</h2><p>I bet u didn't know but the magic number in Hungary is 96 :o<br>Number of today box is: 563</p>
//         <a class="button" href="https://youtu.be/K0yztLpRLM4?si=Gw9NpwyThpJTV2NG" target="_blank">Open</a>`,
//     9: `<h2>9 December</h2><p>Wish you to have a good week! Here you find nice russian cartton. Use automatic translate subtitles :D<br>Number of today box is: 115</p>
//         <a class="button" href="https://youtu.be/9hDjp0C79-c?si=jTmQ7FVPjL6_ElTV" target="_blank">Open</a>`,
//     10: `<h2>10 December</h2><p>Szabi, sweetie, thank you for each moment what you spend with me. Meeeow meeeow<br>Number of today box is: 412</p>
//         <a class="button" href="https://youtu.be/z3U0udLH974?si=M0CmRqiIRIP0fmXe" target="_blank">Open</a>`,
//     11: `<h2>11 December</h2><p>Today is international MOUNTAIN day!!! Congratulations :D<br>Number of today box is: 311</p>
//         <a class="button" href="https://youtu.be/yxrMjf31Fyw?si=CFV5O3B0U_hjoDXV" target="_blank">Open</a>`,
//     12: `<h2>12 December</h2><p>You won't believe but today is 2121 day since we met :D 12.12 2121 :D It's really special day for us ^^<br>Number of today box is: 509</p>
//         <a class="button" href="https://youtu.be/k_plih5b9To?si=JehwU4mM43y_0k34" target="_blank">Open</a>`,
//     13: `<h2>13 December</h2><p>Welcome, Friday, welcome welcome. You did a great job during this week. I'm so so proud of you <3<br>Number of today box is: 248</p>
//         <a class="button" href="https://youtu.be/V_MX0HiIgRQ?si=54ONlq5kX7vx8TNi" target="_blank">Open</a>`,
//     14: `<h2>14 December</h2><p>For this weekend I wanna offer to enjoy some Dreamworks cartoons :D<br>Number of today box is: 634</p>
//         <a class="button" href="https://9movies.top/movie/puss-in-boots-the-last-wish-91342" target="_blank">Open</a>`,
//     15: `<h2>15 December</h2><p>Let's watch together Shrek today, shall we? :D<br>Number of today box is: 323</p>
//         <a class="button" href="https://9movies.top/movie/shrek-19549" target="_blank">Open</a>`,
//     16: `<h2>16 December</h2><p>Let's start a week with shocking fact:<br>Some historians think Jesus was born in spring, not the winter at all! Christmas on Dec 25th wasn't celebrated until about 336 AD :o<br>Number of today box is: 431</p>
//         <a class="button" href="https://youtu.be/-E1ULv6LcOk?si=Rqi5YowWWUwFL8ba" target="_blank">Open</a>`,
//     17: `<h2>17 December</h2><p>I wish you a lot luck in new year ^^ To you be healthy and headache stop to worry you that mcuh :D<br>Number of today box is: 613</p>
//         <a class="button" href="https://youtu.be/TbL-uxd4ZVw?si=NQEBbCnSqQPt_xfB" target="_blank">Open</a>`,
//     18: `<h2>18 December</h2><p>It's Wednesday, my dude :o SO i wish you always be a frog what get out of any troubles!<br>Number of today box is: 582</p>
//         <a class="button" href="https://youtu.be/i74tlP7G8_I?si=wQyIDWBeFPZwjRNr" target="_blank">Open</a>`,
//     19: `<h2>19 December</h2><p>Time for interesting facts :D Thursday means "tree day" in Japanese.<br>Number of today box is: 254</p>
//         <a class="button" href="https://youtu.be/9_gddkKM_Xs?si=XhXUtgl1vzX9Jx7p&t=142" target="_blank">Open</a>`,
//     20: `<h2>20 December</h2><p>Meow, Szabi <3 Week wasn't easy one... Here some more christmas episode from somewhere :3 Enjoy ^^<br>Number of today box is: 145</p>
//         <a class="button" href="https://9anime.com.ro/kaguya-sama-wa-kokurasetai-first-kiss-wa-owaranai-episode-4/" target="_blank">Open</a>`,
//     21: `<h2>21 December</h2><p>Happy Saturday, Schatz :D I'm so glad you remember this ^^ Wish you always get discounts and always find in store what you came for :D<br>Number of today box is: 421</p>
//         <a class="button" href="https://youtu.be/iDYXVPVvcFY?si=Pac4AVuPD2wm0tmO" target="_blank">Open</a>`,
//     22: `<h2>22 December</h2><p>And it was absolute right! Guess it was tricky to find it :D Wish you always find a solutions even for hardest tasks :D meow<br>Number of today box is: 523</p>
//         <a class="button" href="https://youtu.be/i1q81xTUsVE?si=Q-_OV8lIhfQbl1NH" target="_blank">Open</a>`,
//     23: `<h2>23 December</h2><p>Just 2 days before the christmas :D Interesting fact for you:<br>The shortened form of Christmas is "X mas", it's being used from 16th century<br>Number of today box is: 234</p>
//         <a class="button" href="https://youtu.be/CQXsVqRV7-M?si=U7pwp9yM6xsRKd-P" target="_blank">Open</a>`,
//     24: `<h2>24 December</h2><p>Tomorrow is Christmas day! So exciting :D<br>Number of today box is: 529</p>
//         <a class="button" href="https://youtu.be/o5qM7hbovx0?si=Uj9jGRbpTSrhWS2B" target="_blank">Open</a>`,
//     25: `<h2>25 December</h2><p>Merry Christmas, my love :D Wish to you always have energy to reach your goals, to you be super healthy<br> and wish to meet next Christmas with you too <3<br>Number of today box is: 318</p>
//         <a class="button" href="https://youtu.be/fb0XiKYH3z0?si=drrfUER3XME-9a8L" target="_blank">Open</a>`,
//     26: `<h2>26 December</h2><p>I admit that was a tricky question xD I offer you to watch some funny moments from there :D<br>Number of today box is: 661</p>
//         <a class="button" href="https://youtu.be/958ks91XQXw?si=nO_wnM4lLrmHdwk2" target="_blank">Open</a>`,
//     27: `<h2>27 December</h2><p>Wanna get some...massaging? :o I'm happy you solved this riddle too ^^ Wish you to all your exercises protect your back and it never hurt :D meeeow<br>Number of today box is: 106</p>
//         <a class="button" href="https://youtu.be/YKsNUl_s0XQ?si=kroFd8YSDrLXhVXb" target="_blank">Open</a>`,
//     28: `<h2>28 December</h2><p>Just few days before the new year... I'm so excited :D Are you? Thank you for wearing hat :D Wish you always have perfect hair :D <br>Number of today box is: 182</p>
//         <a class="button" href="https://youtu.be/aVOA1s3VaL4?si=-YzY96D2GUY0tuNQ" target="_blank">Open</a>`,
//     29: `<h2>29 December</h2><p>Kiss kiss kiss kiss :D Just one more time chance to say you: Lyublyu :3 Szeretlek :D <br>Number of today box is: 249</p>
//         <a class="button" href="https://youtu.be/09VO1BaXluc?si=LLaPr0TQXVy3Lrun" target="_blank">Open</a>`,
//     30: `<h2>30 December</h2><p>New Year is almost here, Schatz :D Wish you in new year always feel confident and believe in yourself <3 Schaaaatz :D meeow<br>Number of today box is: 154</p>
//         <a class="button" href="https://9movies.top/movie/harry-potter-and-the-philosophers-stone-19812" target="_blank">Open</a>`,
//     31: `<h2>31 December</h2><p>Tomorrow is New Year :D I'm really excited that we will meet it together <3 Meeeow meeow meeow<br>Number of today box is: 673</p>
//         <a class="button" href="https://9movies.top/movie/rise-of-the-guardians-19080" target="_blank">Open</a>`
//   };


// localStorage.removeItem('GotActivity');
// localStorage.removeItem('ForPastDays');
// localStorage.removeItem('Day 1');
// localStorage.removeItem('Day 2');
// localStorage.removeItem('Day 3');
// localStorage.removeItem('Day 4');
// localStorage.removeItem('Day 5');
// localStorage.removeItem('Day 6');
// localStorage.removeItem('Day 7');
// localStorage.removeItem('Day 8');
// localStorage.removeItem('Day 9');
// localStorage.removeItem('Day 10');
// localStorage.removeItem('Day 11');
// localStorage.removeItem('Day 12');
// localStorage.removeItem('Day 13');
// localStorage.removeItem('Day 14');
// localStorage.removeItem('Day 24');
// localStorage.removeItem('Day 31');
// localStorage.removeItem('Day 15');
// localStorage.removeItem('Day 16');
// localStorage.removeItem('Day 17');
// localStorage.removeItem('Day 18');
// localStorage.removeItem('Day 19');
// localStorage.removeItem('Day 20');
// localStorage.removeItem('Day 21');
// localStorage.removeItem('Day 22');
// localStorage.removeItem('Day 23');
// localStorage.removeItem('Day 24');
// localStorage.removeItem('Day 25');
// localStorage.removeItem('Day 26');
// localStorage.removeItem('Day 27');
// localStorage.removeItem('Day 28');
// localStorage.removeItem('Day 29');
// localStorage.removeItem('Day 30');


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
    10: "4",
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
    24: "антибиотики",
    25: "100",
    26: "7",
    27: "9",
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









var d = new Date(); 
var todaysDate = d.getDate();

// var todaysDate = 31;
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


  

