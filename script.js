/* ======================================================================
   FitAI — DATA LAYER
====================================================================== */
const QUOTES = [
 "The only bad workout is the one that didn't happen.",
 "Discipline is choosing between what you want now and what you want most.",
 "Your body can stand almost anything. It's your mind you have to convince.",
 "Small daily improvements lead to staggering long-term results.",
 "Push yourself, because no one else is going to do it for you.",
 "Success starts with self-discipline.",
 "Sweat is just fat crying.",
 "The pain of discipline weighs ounces; the pain of regret weighs tons.",
 "Don't stop when you're tired. Stop when you're done.",
 "Every workout is progress, no matter how small."
];

const TRAINERS = [
 {
   name: "fit.rajveer",
   tag: "Strength & Conditioning",
   img: "Rajveer.jpeg",
   instagram: "https://www.instagram.com/fit.rajveerr/"
 },
 {
   name: "Angesh Gupta",
   tag: "Bodybuilding Coach",
   img: "Angesh.jpeg",
   instagram: "https://www.instagram.com/angesh_1/"
 },
 {
   name: "Dhanraj Jaiswal",
   tag: "Nutrition Specialist",
   img: "Dhanrajj.jpeg",
   instagram: "https://www.instagram.com/_i_m_dhanraj/"
 },
 {
   name: "Utkarsh Gupta",
   tag: "Mobility & Yoga",
   img: "Utkarsh.jpeg",
   instagram: "https://www.instagram.com/_hey__utkarsh__/"
 }
];

const GALLERY = [
 {name:"Rohan — 6 months", img:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=55&w=440&auto=format&fit=crop"},
 {name:"Sara — 4 months", img:"https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=55&w=440&auto=format&fit=crop"},
 {name:"Kabir — 8 months", img:"https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=55&w=440&auto=format&fit=crop"},
 {name:"Naina — 5 months", img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=55&w=440&auto=format&fit=crop"}
];

const TESTIMONIALS = [
 {name:"Tejas Trivedi", role:"Lost 14kg", img:"tejas.jpeg", text:"FitAI's weekly plan actually adapted to my schedule. Down 14kg in 5 months and still going."},
 {name:"Abhishek Gupta", role:"Muscle Gain", img:"Abhishek.jpeg", text:"The diet planner made bulking simple — I finally hit my protein targets every single day."},
 {name:"Manish Kumar", role:"Strength Athlete", img:"Manish.jpeg", text:"Best free-form planner I've used. The exercise library alone is worth it for form checks."}
];

/* Exercise Library Database */
const EX_ICONS = {chest:'fa-person',back:'fa-person-walking',shoulders:'fa-dumbbell',biceps:'fa-hand-fist',triceps:'fa-hand-fist',legs:'fa-person-running',abs:'fa-bolt',cardio:'fa-heart-pulse'};

const EXERCISES = {
 chest: [
  {name:"Barbell Bench Press", difficulty:"Intermediate", target:"Chest, Triceps, Shoulders", cal:9,
   desc:"A compound press that builds overall chest mass and pressing strength.",
   benefits:["Builds pushing strength","Increases chest mass","Improves shoulder stability"],
   steps:["Lie on the bench with eyes under the bar","Grip slightly wider than shoulder-width","Lower the bar to mid-chest with control","Press up until arms are fully extended"],
   mistakes:["Bouncing the bar off the chest","Flaring elbows to 90°","Lifting hips off the bench"],
   tips:["Keep shoulder blades pinched","Drive feet into the floor for stability"]},
  {name:"Incline Dumbbell Press", difficulty:"Beginner", target:"Upper Chest", cal:8,
   desc:"Targets the upper chest fibers using an inclined bench.",
   benefits:["Upper chest development","Improved shoulder health vs flat bench","Greater range of motion"],
   steps:["Set bench to 30-45°","Press dumbbells up and slightly inward","Lower under control to chest level"],
   mistakes:["Setting incline too steep (turns into shoulder press)","Using momentum"],
   tips:["Squeeze at the top for one second"]},
  {name:"Push-Up", difficulty:"Beginner", target:"Chest, Core, Triceps", cal:6,
   desc:"A bodyweight staple for chest and core strength.",
   benefits:["No equipment needed","Builds core stability","Scalable for all levels"],
   steps:["Hands slightly wider than shoulders","Lower chest to floor keeping body straight","Push back up explosively"],
   mistakes:["Sagging hips","Partial range of motion"],
   tips:["Squeeze glutes to keep a straight line"]},
  {name:"Cable Fly", difficulty:"Intermediate", target:"Chest (inner/outer)", cal:6,
   desc:"Isolation movement for chest with constant tension.",
   benefits:["Great chest squeeze","Constant tension throughout","Low joint stress"],
   steps:["Stand between cable towers","Bring handles together in a hugging motion","Control the return"],
   mistakes:["Using too much weight and turning it into a press"],
   tips:["Focus on squeezing the chest, not the arms"]}
 ],
 back: [
  {name:"Deadlift", difficulty:"Advanced", target:"Back, Glutes, Hamstrings", cal:10,
   desc:"The king of posterior chain builders.",
   benefits:["Full-body strength","Improves posture","Builds grip strength"],
   steps:["Feet hip-width, bar over midfoot","Hinge and grip bar just outside knees","Drive through heels, keep bar close to legs","Lock out hips and knees together"],
   mistakes:["Rounding the lower back","Bar drifting away from shins"],
   tips:["Brace your core before lifting"]},
  {name:"Pull-Up", difficulty:"Intermediate", target:"Lats, Biceps", cal:8,
   desc:"A vertical pulling movement for a wide, strong back.",
   benefits:["Builds lat width","Improves grip and pulling strength"],
   steps:["Hang from bar, hands shoulder-width","Pull chin over the bar","Lower with control"],
   mistakes:["Using momentum/kipping","Partial reps"],
   tips:["Think 'elbows to hips'"]},
  {name:"Bent-Over Barbell Row", difficulty:"Intermediate", target:"Mid Back, Lats", cal:8,
   desc:"Builds back thickness and pulling strength.",
   benefits:["Back thickness","Improves posture","Strengthens grip"],
   steps:["Hinge at hips to ~45°","Row bar to lower ribcage","Lower with control"],
   mistakes:["Using too much body English","Rounding the back"],
   tips:["Keep neck neutral, eyes down"]},
  {name:"Lat Pulldown", difficulty:"Beginner", target:"Lats", cal:7,
   desc:"A machine alternative for building lat width.",
   benefits:["Beginner friendly","Adjustable resistance","Builds pull-up strength"],
   steps:["Grip bar wide","Pull bar to upper chest","Control the return"],
   mistakes:["Leaning back excessively","Using momentum"],
   tips:["Lead with your elbows"]}
 ],
 shoulders: [
  {name:"Overhead Barbell Press", difficulty:"Intermediate", target:"Shoulders, Triceps", cal:8,
   desc:"A compound press for overall shoulder strength and size.",
   benefits:["Builds shoulder mass","Improves core stability","Functional pressing strength"],
   steps:["Bar at collarbone, grip shoulder width","Press overhead, head through at top","Lower with control"],
   mistakes:["Excessive lower back arch","Flaring elbows too wide"],
   tips:["Brace core like a plank"]},
  {name:"Lateral Raise", difficulty:"Beginner", target:"Side Delts", cal:5,
   desc:"Isolation move for wider-looking shoulders.",
   benefits:["Shoulder width","Improves delt definition"],
   steps:["Dumbbells at sides","Raise arms to shoulder height","Lower with control"],
   mistakes:["Using momentum/swinging","Raising above shoulder height"],
   tips:["Lead with elbows, slight bend in arms"]},
  {name:"Face Pull", difficulty:"Beginner", target:"Rear Delts, Rotator Cuff", cal:5,
   desc:"Great for shoulder health and posture.",
   benefits:["Improves posture","Balances pressing volume","Shoulder joint health"],
   steps:["Cable at face height","Pull rope towards face, elbows high","Control the return"],
   mistakes:["Using heavy weight with poor form"],
   tips:["Squeeze shoulder blades at the end"]},
  {name:"Arnold Press", difficulty:"Intermediate", target:"Full Shoulder", cal:7,
   desc:"A rotational press hitting all three deltoid heads.",
   benefits:["Full deltoid activation","Improves shoulder mobility"],
   steps:["Start dumbbells at chest, palms in","Rotate and press overhead","Reverse on the way down"],
   mistakes:["Rushing the rotation"],
   tips:["Move slow and controlled"]}
 ],
 biceps: [
  {name:"Barbell Curl", difficulty:"Beginner", target:"Biceps", cal:5,
   desc:"The classic mass builder for biceps.",
   benefits:["Builds bicep size","Improves grip strength"],
   steps:["Grip shoulder-width, elbows pinned","Curl bar to shoulders","Lower with control"],
   mistakes:["Swinging the torso","Flaring elbows forward"],
   tips:["Keep elbows locked at your sides"]},
  {name:"Dumbbell Hammer Curl", difficulty:"Beginner", target:"Biceps, Forearms", cal:5,
   desc:"Neutral-grip curl that also builds forearm size.",
   benefits:["Builds forearm thickness","Joint-friendly grip"],
   steps:["Neutral grip dumbbells at sides","Curl straight up","Lower with control"],
   mistakes:["Using momentum"],
   tips:["Keep wrists straight"]},
  {name:"Concentration Curl", difficulty:"Intermediate", target:"Biceps Peak", cal:4,
   desc:"Isolation move for bicep peak development.",
   benefits:["Maximum mind-muscle connection","Isolates the biceps"],
   steps:["Elbow braced against inner thigh","Curl dumbbell to shoulder","Lower slowly"],
   mistakes:["Rushing the rep"],
   tips:["Squeeze hard at the top"]}
 ],
 triceps: [
  {name:"Close-Grip Bench Press", difficulty:"Intermediate", target:"Triceps, Chest", cal:8,
   desc:"A compound press that builds heavy tricep mass.",
   benefits:["Builds tricep strength","Carries over to bench press"],
   steps:["Hands shoulder-width apart","Lower bar to lower chest","Press up, elbows close to body"],
   mistakes:["Grip too narrow (wrist strain)"],
   tips:["Keep elbows tucked"]},
  {name:"Tricep Rope Pushdown", difficulty:"Beginner", target:"Triceps", cal:5,
   desc:"Isolation move for tricep definition.",
   benefits:["Great pump and isolation","Low joint stress"],
   steps:["Grip rope, elbows at sides","Push down and spread rope at bottom","Control the return"],
   mistakes:["Using shoulders instead of triceps","Flaring elbows out"],
   tips:["Keep elbows pinned to torso"]},
  {name:"Overhead Tricep Extension", difficulty:"Beginner", target:"Triceps (long head)", cal:5,
   desc:"Stretches and targets the long head of the triceps.",
   benefits:["Full tricep stretch","Builds arm size"],
   steps:["Dumbbell overhead, both hands","Lower behind head with control","Extend back up"],
   mistakes:["Flaring elbows out wide"],
   tips:["Keep elbows pointed forward"]}
 ],
 legs: [
  {name:"Barbell Back Squat", difficulty:"Intermediate", target:"Quads, Glutes, Hamstrings", cal:10,
   desc:"The foundational lower-body strength builder.",
   benefits:["Full leg development","Builds core strength","Boosts athletic performance"],
   steps:["Bar on upper traps","Feet shoulder-width, brace core","Squat until thighs parallel to floor","Drive up through heels"],
   mistakes:["Knees caving inward","Heels lifting off ground"],
   tips:["Keep chest up throughout the movement"]},
  {name:"Romanian Deadlift", difficulty:"Intermediate", target:"Hamstrings, Glutes", cal:8,
   desc:"A hip-hinge movement for posterior chain development.",
   benefits:["Hamstring flexibility and strength","Glute development"],
   steps:["Bar at hip level","Hinge hips back, slight knee bend","Lower bar along legs to shin","Drive hips forward to stand"],
   mistakes:["Rounding the back","Bending knees too much (turns into squat)"],
   tips:["Feel the stretch in your hamstrings"]},
  {name:"Walking Lunge", difficulty:"Beginner", target:"Quads, Glutes", cal:7,
   desc:"A unilateral movement for balance and leg strength.",
   benefits:["Improves balance","Unilateral strength","Functional movement"],
   steps:["Step forward into a lunge","Lower back knee toward floor","Push off to step into next lunge"],
   mistakes:["Front knee traveling past toes excessively","Short, choppy steps"],
   tips:["Keep torso upright"]},
  {name:"Leg Press", difficulty:"Beginner", target:"Quads, Glutes", cal:7,
   desc:"Machine-based compound movement for leg mass.",
   benefits:["Beginner friendly","Allows heavy loading safely"],
   steps:["Feet shoulder-width on platform","Lower until knees at 90°","Press back up without locking knees hard"],
   mistakes:["Locking knees at the top","Placing feet too low"],
   tips:["Keep lower back pressed into the pad"]}
 ],
 abs: [
  {name:"Plank", difficulty:"Beginner", target:"Core (full)", cal:4,
   desc:"An isometric hold that builds core stability.",
   benefits:["Improves core endurance","Protects lower back","No equipment needed"],
   steps:["Forearms on floor, elbows under shoulders","Body in a straight line","Hold, breathing steadily"],
   mistakes:["Hips sagging or piking up"],
   tips:["Squeeze glutes and brace abs"]},
  {name:"Hanging Leg Raise", difficulty:"Advanced", target:"Lower Abs", cal:6,
   desc:"An advanced move for lower ab and hip flexor strength.",
   benefits:["Strong lower ab development","Improves grip endurance"],
   steps:["Hang from bar, legs straight","Raise legs to hip height or higher","Lower with control"],
   mistakes:["Swinging for momentum"],
   tips:["Exhale as you raise your legs"]},
  {name:"Bicycle Crunch", difficulty:"Beginner", target:"Obliques, Abs", cal:5,
   desc:"A dynamic move that hits the entire core, especially obliques.",
   benefits:["Targets obliques","No equipment needed"],
   steps:["Hands behind head, knees bent","Rotate elbow to opposite knee","Alternate sides"],
   mistakes:["Pulling on the neck"],
   tips:["Move slowly for control over speed"]},
  {name:"Russian Twist", difficulty:"Beginner", target:"Obliques", cal:5,
   desc:"Rotational movement for oblique strength.",
   benefits:["Builds rotational core strength","Can add weight for progression"],
   steps:["Sit with knees bent, lean back slightly","Rotate torso side to side","Optionally hold a weight"],
   mistakes:["Rounding the back excessively"],
   tips:["Keep chest lifted"]}
 ],
 cardio: [
  {name:"Treadmill Incline Walk", difficulty:"Beginner", target:"Cardiovascular, Legs", cal:8,
   desc:"Low-impact steady-state cardio for fat loss.",
   benefits:["Low joint impact","Effective for fat loss","Easy to sustain"],
   steps:["Set incline to 8-12%","Walk at a brisk, sustainable pace","Maintain for 20-40 minutes"],
   mistakes:["Holding onto the rails (reduces effectiveness)"],
   tips:["Keep a pace where conversation is difficult but possible"]},
  {name:"Jump Rope", difficulty:"Intermediate", target:"Full Body, Cardiovascular", cal:12,
   desc:"A high-intensity cardio and coordination builder.",
   benefits:["Burns calories fast","Improves coordination","Portable, minimal equipment"],
   steps:["Rope handles at hip height","Small hops, wrists doing the work","Keep a steady rhythm"],
   mistakes:["Jumping too high","Using arms instead of wrists"],
   tips:["Land softly on the balls of your feet"]},
  {name:"Burpees", difficulty:"Advanced", target:"Full Body, Cardiovascular", cal:14,
   desc:"An explosive full-body conditioning exercise.",
   benefits:["Full body conditioning","No equipment needed","High calorie burn"],
   steps:["Squat down, hands on floor","Jump feet back to plank","Push-up, jump feet forward","Jump up explosively"],
   mistakes:["Sagging hips in the plank position"],
   tips:["Pace yourself — quality over speed"]},
  {name:"Cycling (Stationary)", difficulty:"Beginner", target:"Cardiovascular, Quads", cal:9,
   desc:"Low-impact cardio great for endurance and leg endurance.",
   benefits:["Joint friendly","Adjustable intensity","Great for active recovery"],
   steps:["Adjust seat height to hip level","Pedal at a steady cadence","Increase resistance for intervals"],
   mistakes:["Seat too low, causing knee strain"],
   tips:["Keep a slight bend in the knee at full extension"]}
 ]
};

/* ==================== NEXT FILE SECTION ==================== */

/* ======================================================================
   FitAI — APP LOGIC
====================================================================== */
const $ = (sel,ctx=document)=>ctx.querySelector(sel);
const $$ = (sel,ctx=document)=>[...ctx.querySelectorAll(sel)];
const store = {
  get:(k,d=null)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},
  set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))
};

/* ---------- LOADER ---------- */
window.addEventListener('load',()=>{
  setTimeout(()=>$('#loader').classList.add('hide'),500);
});

/* ---------- TOAST ---------- */
function toast(msg){
  const t=$('#toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(()=>t.classList.remove('show'),2600);
}

/* ---------- NAVIGATION (SPA routing) ---------- */
function goTo(id){
  $$('.page').forEach(p=>p.classList.remove('active'));
  const target = document.getElementById(id);
  if(target) target.classList.add('active');
  $$('.nav-links a').forEach(a=>a.classList.toggle('active',a.dataset.nav===id));
  if(id !== 'home'){
  window.scrollTo({top:0,behavior:'smooth'});
}
  history.replaceState(null,'',`#${id}`);
  $('#navLinks').classList.remove('open');
  if(id==='library') renderLibrary();
  if(id==='dashboard') renderDashboard();
}
$$('.nav-links a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();goTo(a.dataset.nav);}));
window.addEventListener('DOMContentLoaded',()=>{
  const h=location.hash.replace('#','');
  goTo(h && document.getElementById(h) ? h : 'home');
});

/* Hamburger (mobile) */
$('#hamburger').addEventListener('click',()=>$('#navLinks').classList.toggle('open'));

/* Sticky navbar on scroll */
window.addEventListener('scroll',()=>{
  $('#navbar').classList.toggle('scrolled', window.scrollY>40);
  $('#scrollTopBtn').classList.toggle('show', window.scrollY>500);
});
$('#scrollTopBtn').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ---------- THEME TOGGLE ---------- */
function applyTheme(t){
  document.documentElement.setAttribute('data-theme',t);
  $('#themeToggle').innerHTML = t==='dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  store.set('fitai_theme',t);
}
applyTheme(store.get('fitai_theme','dark'));
$('#themeToggle').addEventListener('click',()=>{
  applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');
});

/* ---------- QUOTE OF THE DAY ---------- */
(function(){
  const dayIdx = new Date().getDate() % QUOTES.length;
  $('#quoteBar').innerHTML = `<i class="fa-solid fa-quote-left"></i> <b>Daily Motivation:</b> "${QUOTES[dayIdx]}"`;
})();

/* ---------- ANIMATED STATS ---------- */
function animateStats(){
  $$('.stat-num').forEach(el=>{
    const target = +el.dataset.count;
    let cur = 0; const step = Math.max(1,Math.ceil(target/80));
    const t = setInterval(()=>{
      cur += step;
      if(cur>=target){cur=target;clearInterval(t);}
      el.textContent = cur.toLocaleString();
    },20);
  });
}
const statsObserver = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ animateStats(); statsObserver.disconnect(); } });
},{threshold:.4});
statsObserver.observe($('.hero-stats'));

/* ---------- RENDER HOME DYNAMIC CONTENT ---------- */
function renderHome(){

  const trainerGrid = document.getElementById('trainerGrid');

  if(trainerGrid){
    trainerGrid.innerHTML = TRAINERS.map(t => `
         <div class="glass-card trainer-card">

        <div class="trainer-img">
          <img 
            src="${t.img}" 
            alt="${t.name}"
            width="120"
            height="120"
          >
        </div>

        <h3>${t.name}</h3>

        <span class="trainer-tag">
          ${t.tag}
        </span>

        <div class="social-mini">
          <a href="${t.instagram}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>

      </div>
    `).join('');
  }

  const galleryGrid = document.getElementById('galleryGrid');

  if(galleryGrid){
    galleryGrid.innerHTML = GALLERY.map(g => `
      <div class="gallery-item">
        <img 
          src="${g.img}" 
          alt="${g.name}"
          loading="lazy"
          width="440"
          height="580"
        >
        <div class="gallery-overlay">${g.name}</div>
      </div>
    `).join('');
  }

  const testiGrid = document.getElementById('testiGrid');

  if(testiGrid){
    testiGrid.innerHTML = TESTIMONIALS.map(t => `
      <div class="glass-card testi-card">

        <div class="testi-stars">★★★★★</div>

        <p style="color:var(--text-dim);font-size:.92rem;">
          "${t.text}"
        </p>

        <div class="testi-user">
          <img 
            src="${t.img}" 
            alt="${t.name}"
            width="44"
            height="44"
          >

          <div>
            <b>${t.name}</b>
            <span>${t.role}</span>
          </div>
        </div>

      </div>
    `).join('');
  }
}

renderHome();
/* ---------- CHIP SELECTORS (planner form) ---------- */
function wireChips(containerId){
  $$(`#${containerId} .chip`).forEach(c=>c.addEventListener('click',()=>{
    $$(`#${containerId} .chip`).forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
  }));
}
wireChips('goalChips'); wireChips('expChips'); wireChips('daysChips');
function getChipVal(containerId){ return $(`#${containerId} .chip.active`).dataset.val; }

/* ==================== NEXT FILE SECTION ==================== */

/* ======================================================================
   PLANNER ENGINE — WORKOUT
====================================================================== */
const SPLIT_TEMPLATES = {
 3: [
  {day:'Monday',focus:'Full Body A',muscles:['chest','back','legs']},
  {day:'Tuesday',rest:true},
  {day:'Wednesday',focus:'Full Body B',muscles:['shoulders','abs','legs']},
  {day:'Thursday',rest:true},
  {day:'Friday',focus:'Full Body C',muscles:['back','biceps','triceps']},
  {day:'Saturday',rest:true},
  {day:'Sunday',focus:'Recovery, Stretching & Yoga',recovery:true}
 ],
 4: [
  {day:'Monday',focus:'Upper Body (Push)',muscles:['chest','shoulders','triceps']},
  {day:'Tuesday',focus:'Lower Body',muscles:['legs','abs']},
  {day:'Wednesday',rest:true},
  {day:'Thursday',focus:'Upper Body (Pull)',muscles:['back','biceps']},
  {day:'Friday',focus:'Lower Body + Core',muscles:['legs','abs']},
  {day:'Saturday',rest:true},
  {day:'Sunday',focus:'Recovery, Stretching & Yoga',recovery:true}
 ],
 5: [
  {day:'Monday',focus:'Chest & Triceps',muscles:['chest','triceps']},
  {day:'Tuesday',focus:'Back & Biceps',muscles:['back','biceps']},
  {day:'Wednesday',focus:'Legs',muscles:['legs']},
  {day:'Thursday',focus:'Shoulders & Abs',muscles:['shoulders','abs']},
  {day:'Friday',focus:'Full Body + Cardio',muscles:['chest','back','cardio']},
  {day:'Saturday',rest:true},
  {day:'Sunday',focus:'Recovery, Stretching & Yoga',recovery:true}
 ],
 6: [
  {day:'Monday',focus:'Chest & Triceps',muscles:['chest','triceps']},
  {day:'Tuesday',focus:'Back & Biceps',muscles:['back','biceps']},
  {day:'Wednesday',focus:'Legs',muscles:['legs']},
  {day:'Thursday',focus:'Shoulders',muscles:['shoulders','abs']},
  {day:'Friday',focus:'Chest + Back',muscles:['chest','back']},
  {day:'Saturday',focus:'Arms + Abs',muscles:['biceps','triceps','abs']},
  {day:'Sunday',focus:'Recovery, Stretching & Yoga',recovery:true}
 ],
 7: [
  {day:'Monday',focus:'Chest & Triceps',muscles:['chest','triceps']},
  {day:'Tuesday',focus:'Back & Biceps',muscles:['back','biceps']},
  {day:'Wednesday',focus:'Legs',muscles:['legs']},
  {day:'Thursday',focus:'Shoulders',muscles:['shoulders','abs']},
  {day:'Friday',focus:'Chest + Back',muscles:['chest','back']},
  {day:'Saturday',focus:'Arms + Abs',muscles:['biceps','triceps','abs']},
  {day:'Sunday',focus:'Recovery, Stretching & Yoga',recovery:true}
 ]
};
const RECOVERY_ACTIVITIES = [
 {name:"Full Body Stretching",target:"Whole Body",cal:2,difficulty:"Beginner",desc:"Gentle static stretches to improve flexibility and aid recovery.",benefits:["Reduces muscle soreness","Improves flexibility"],steps:["Hold each stretch for 20-30 seconds","Breathe deeply and relax into each position"],mistakes:["Bouncing while stretching"],tips:["Never stretch to the point of pain"]},
 {name:"Yoga Flow (Sun Salutations)",target:"Whole Body",cal:4,difficulty:"Beginner",desc:"A flowing sequence to improve mobility and calm the mind.",benefits:["Improves mobility","Reduces stress","Active recovery"],steps:["Move slowly through each pose","Sync breath with movement"],mistakes:["Rushing through poses"],tips:["Focus on breath control"]},
 {name:"Foam Rolling",target:"Whole Body",cal:2,difficulty:"Beginner",desc:"Self-myofascial release to reduce muscle tightness.",benefits:["Reduces soreness","Improves blood flow"],steps:["Roll slowly over each muscle group","Pause on tender spots for 20-30 seconds"],mistakes:["Rolling directly over joints"],tips:["Breathe and relax the muscle being rolled"]},
 {name:"Light Walk",target:"Cardiovascular",cal:5,difficulty:"Beginner",desc:"Low-intensity walk to promote blood flow and recovery.",benefits:["Active recovery","Improves circulation"],steps:["Walk at an easy, relaxed pace for 20-30 minutes"],mistakes:["Walking too intensely"],tips:["Keep it conversational pace"]}
];

const GOAL_LABELS = {weightloss:"Weight Loss",musclegain:"Muscle Gain",fatloss:"Fat Loss",strength:"Strength",general:"General Fitness"};
const GOAL_PARAMS = {
 weightloss:{sets:3,reps:"12-15",rest:"30-45 sec",calFactor:0.85},
 fatloss:{sets:3,reps:"12-15",rest:"30-45 sec",calFactor:0.85},
 musclegain:{sets:4,reps:"8-12",rest:"60-90 sec",calFactor:1.15},
 strength:{sets:5,reps:"4-6",rest:"2-3 min",calFactor:1.1},
 general:{sets:3,reps:"10-12",rest:"45-60 sec",calFactor:1.0}
};
const EXP_COUNT = {beginner:3,intermediate:4,advanced:5};

function pickExercises(muscles,count){
  let pool=[];
  muscles.forEach(m=>{ (EXERCISES[m]||[]).forEach(ex=>pool.push({...ex,group:m})); });
  // simple deterministic shuffle based on date so it feels varied but stable per session
  pool = pool.sort((a,b)=> (a.name+a.group).localeCompare(b.name+b.group));
  let out=[]; let i=0;
  while(out.length<count && pool.length>0){ out.push(pool[i%pool.length]); i++; if(i>pool.length*2) break; }
  // ensure uniqueness first pass
  const seen=new Set(); const unique=[];
  for(const ex of pool){ if(!seen.has(ex.name)){ seen.add(ex.name); unique.push(ex); } if(unique.length>=count) break; }
  return unique.length? unique : out;
}

function generateWorkoutPlan(profile){
  const template = SPLIT_TEMPLATES[profile.days];
  const gp = GOAL_PARAMS[profile.goal];
  const count = EXP_COUNT[profile.experience];
  return template.map(d=>{
    if(d.rest) return {day:d.day,rest:true};
    if(d.recovery) return {day:d.day,focus:d.focus,recovery:true,exercises:RECOVERY_ACTIVITIES.map(a=>({...a,sets:1,reps:"—",restTime:"—"}))};
    let exs = pickExercises(d.muscles,count);
    if((profile.goal==='weightloss'||profile.goal==='fatloss') && !d.muscles.includes('cardio')){
      const c = EXERCISES.cardio[ (d.day.length) % EXERCISES.cardio.length ];
      exs = [...exs.slice(0,count-1), {...c,group:'cardio'}];
    }
    exs = exs.map(ex=>({
      ...ex, sets:gp.sets, reps:gp.reps, restTime:gp.rest,
      calBurn: Math.round(ex.cal*gp.sets*3*gp.calFactor)
    }));
    return {day:d.day,focus:d.focus,exercises:exs};
  });
}

/* ======================================================================
   PLANNER ENGINE — DIET
====================================================================== */
const FOODS = {
 veg:{
  breakfast:["Oats with banana & almonds","Vegetable poha with peanuts","Moong dal chilla with mint chutney","Greek yogurt with berries & granola","Paneer bhurji with whole wheat toast","Sprouts salad with lemon","Idli with sambar"],
  snack1:["Handful of mixed nuts","Roasted chana","Fruit chaat","Plant-protein smoothie","Buttermilk with roasted cumin","Hummus with carrot sticks","Sprouted moong salad"],
  lunch:["Brown rice, dal, mixed veg sabzi & salad","Quinoa salad with chickpeas & feta","Rajma with brown rice","Paneer tikka with roti & salad","Vegetable pulao with raita","Chole with roti","Tofu stir-fry with brown rice"],
  snack2:["Green tea with almonds","Roasted makhana","Fruit bowl","Plant protein shake","Vegetable soup","Peanut butter on toast","Boiled corn chaat"],
  dinner:["Grilled paneer with sauteed vegetables","Dal tadka with roti & salad","Vegetable khichdi","Tofu & vegetable stir-fry","Palak paneer with roti","Stuffed capsicum with quinoa","Mixed vegetable curry with brown rice"]
 },
 nonveg:{
  breakfast:["Egg white omelette with toast","Boiled eggs with avocado toast","Greek yogurt with eggs & fruit","Chicken sausage with oats","Scrambled eggs with spinach","Protein pancakes with egg whites","Egg bhurji with multigrain toast"],
  snack1:["Boiled eggs","Grilled chicken strips","Tuna salad","Whey protein shake","Cottage cheese with fruit","Chicken skewers","Almonds & boiled egg whites"],
  lunch:["Grilled chicken breast, brown rice & salad","Fish curry with brown rice","Chicken breast with quinoa & veggies","Turkey wrap in whole wheat tortilla","Egg curry with roti","Grilled fish with steamed vegetables","Chicken stir-fry with brown rice"],
  snack2:["Whey protein shake","Boiled egg whites","Grilled chicken cubes","Tuna on crackers","Greek yogurt with honey","Roasted chickpeas","Chicken broth soup"],
  dinner:["Grilled fish with steamed vegetables","Chicken breast with roasted veggies","Egg white omelette with salad","Turkey meatballs with vegetables","Baked salmon with asparagus","Chicken curry with cauliflower rice","Shrimp stir-fry with vegetables"]
 }
};
const DIET_CAL_FACTOR = {weightloss:0.8,fatloss:0.78,musclegain:1.15,strength:1.08,general:1.0};
const PROTEIN_FACTOR = {weightloss:1.8,fatloss:2.0,musclegain:2.0,strength:2.1,general:1.5};

function calcBMR(profile){
  const {gender,weight,height,age} = profile;
  return gender==='female' ? (10*weight+6.25*height-5*age-161) : (10*weight+6.25*height-5*age+5);
}
function generateDietPlan(profile){
  const activityFactor = {beginner:1.375,intermediate:1.55,advanced:1.725}[profile.experience];
  const bmr = calcBMR(profile);
  const tdee = bmr*activityFactor;
  const target = Math.round(tdee*DIET_CAL_FACTOR[profile.goal]);
  const protein = Math.round(profile.weight*PROTEIN_FACTOR[profile.goal]);
  const water = Math.max(2.2,+(profile.weight*0.04).toFixed(1));
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const f = FOODS[profile.diet];
  const plan = days.map((day,i)=>({
    day,
    breakfast:f.breakfast[i%f.breakfast.length],
    snack1:f.snack1[i%f.snack1.length],
    lunch:f.lunch[i%f.lunch.length],
    snack2:f.snack2[i%f.snack2.length],
    dinner:f.dinner[i%f.dinner.length],
    calories:target + (i%2===0? 0:20),
    protein, water
  }));
  return {plan,target,protein,water,bmr:Math.round(bmr),tdee:Math.round(tdee)};
}

/* ==================== NEXT FILE SECTION ==================== */

/* ======================================================================
   PLANNER FORM SUBMIT + RENDER
====================================================================== */
let currentProfile = store.get('fitai_profile',null);
let currentWorkout = store.get('fitai_workout',null);
let currentDiet = store.get('fitai_diet',null);

$('#plannerForm').addEventListener('submit', e=>{
  e.preventDefault();
  const profile = {
    name: $('#p_name').value || 'Athlete',
    age: +$('#p_age').value, gender: $('#p_gender').value,
    height: +$('#p_height').value, weight: +$('#p_weight').value,
    diet: $('#p_diet').value,
    goal: getChipVal('goalChips'), experience: getChipVal('expChips'),
    days: +getChipVal('daysChips')
  };
  currentProfile = profile;
  currentWorkout = generateWorkoutPlan(profile);
  currentDiet = generateDietPlan(profile);
  store.set('fitai_profile',profile); store.set('fitai_workout',currentWorkout); store.set('fitai_diet',currentDiet);
  $('#plannerResult').style.display='block';
  $('#plannerResult').scrollIntoView({behavior:'smooth'});
  renderWorkoutPage(); renderDietPage();
  toast('Your personalized plan has been generated!');
});

function difficultyBadge(d){
  const cls = d==='Beginner'?'badge-beginner':d==='Advanced'?'badge-advanced':'badge-intermediate';
  return `<span class="badge ${cls}">${d}</span>`;
}

function exerciseCardHTML(ex,idx,dayIdx){
  const id = `ex-${dayIdx}-${idx}`;
  return `
  <div class="glass-card ex-card">
    <div class="ex-thumb"><i class="fa-solid ${EX_ICONS[ex.group]||'fa-dumbbell'}"></i></div>
    <div>
      <div class="ex-head">
        <h4>${ex.name}</h4>
        ${difficultyBadge(ex.difficulty)}
      </div>
      <div class="ex-meta">
        <span><i class="fa-solid fa-layer-group"></i>${ex.sets} sets</span>
        <span><i class="fa-solid fa-repeat"></i>${ex.reps} reps</span>
        <span><i class="fa-solid fa-hourglass-half"></i>${ex.restTime} rest</span>
        <span><i class="fa-solid fa-bullseye"></i>${ex.target}</span>
        <span><i class="fa-solid fa-fire"></i>~${ex.calBurn||ex.cal} kcal</span>
      </div>
      <div class="ex-detail-toggle" onclick="document.getElementById('${id}').classList.toggle('open')"><i class="fa-solid fa-chevron-down"></i> View instructions, mistakes & tips</div>
      <div class="ex-details" id="${id}">
        <p>${ex.desc}</p>
        <h5>Instructions</h5><ul>${(ex.steps||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
        <h5>Common Mistakes</h5><ul>${(ex.mistakes||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
        <h5>Tips</h5><ul>${(ex.tips||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`;
}

function renderWorkoutPage(){
  if(!currentWorkout){ $('#workoutContent').innerHTML=''; return; }
  $('#workoutSub').textContent = `${currentProfile.name}'s ${currentProfile.days}-day ${GOAL_LABELS[currentProfile.goal]} split — ${currentProfile.experience} level.`;
  const tabs = currentWorkout.map((d,i)=>`<div class="day-tab ${i===0?'active':''}" data-i="${i}" onclick="showWorkoutDay(${i})">${d.day.slice(0,3)}</div>`).join('');
  $('#workoutContent').innerHTML = `
    <div class="result-toolbar">
      <button class="btn btn-outline btn-sm" onclick="window.print()"><i class="fa-solid fa-print"></i> Print</button>
      <button class="btn btn-gold btn-sm" onclick="window.print()"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
    </div>
    <div class="day-tabs">${tabs}</div>
    <div id="workoutDays"></div>`;
  showWorkoutDay(0);
}
function showWorkoutDay(i){
  $$('#workoutContent .day-tab').forEach((t,idx)=>t.classList.toggle('active',idx===i));
  const d = currentWorkout[i];
  let html = `<div class="day-title">${d.day}</div>`;
  if(d.rest){
    html += `<div class="glass-card" style="text-align:center;padding:50px;"><i class="fa-solid fa-bed" style="font-size:2rem;color:var(--gold);margin-bottom:14px;"></i><h3>Rest Day</h3><p class="section-sub" style="margin:10px auto 0;">Let your muscles recover. Light walking or stretching is optional.</p></div>`;
  } else {
    html += `<div class="day-sub">${d.focus}</div>`;
    html += d.exercises.map((ex,idx)=>exerciseCardHTML(ex,idx,i)).join('');
  }
  $('#workoutDays').innerHTML = html;
}

function renderDietPage(){
  if(!currentDiet){ $('#dietContent').innerHTML=''; return; }
  $('#dietSub').textContent = `${currentProfile.name}'s ${GOAL_LABELS[currentProfile.goal]} diet plan — ${currentProfile.diet==='veg'?'Vegetarian':'Non-Vegetarian'} · Target ~${currentDiet.target} kcal/day.`;
  let html = `<div class="result-toolbar">
      <button class="btn btn-outline btn-sm" onclick="window.print()"><i class="fa-solid fa-print"></i> Print</button>
      <button class="btn btn-gold btn-sm" onclick="window.print()"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
    </div>`;
  currentDiet.plan.forEach(d=>{
    html += `
    <div class="diet-day">
      <div class="day-title">${d.day}</div>
      <div class="meal-grid">
        <div class="glass-card meal-card"><h5><i class="fa-solid fa-sun"></i>Breakfast</h5>${d.breakfast}</div>
        <div class="glass-card meal-card"><h5><i class="fa-solid fa-apple-whole"></i>Mid-Morning Snack</h5>${d.snack1}</div>
        <div class="glass-card meal-card"><h5><i class="fa-solid fa-bowl-food"></i>Lunch</h5>${d.lunch}</div>
        <div class="glass-card meal-card"><h5><i class="fa-solid fa-mug-hot"></i>Evening Snack</h5>${d.snack2}</div>
        <div class="glass-card meal-card"><h5><i class="fa-solid fa-utensils"></i>Dinner</h5>${d.dinner}</div>
        <div class="glass-card meal-card"><h5><i class="fa-solid fa-chart-simple"></i>Daily Totals</h5>
          <div style="font-size:.85rem;color:var(--text-dim);">Calories: <b style="color:var(--gold);">${d.calories} kcal</b><br>Protein: <b style="color:var(--gold);">${d.protein} g</b><br>Water: <b style="color:var(--gold);">${d.water} L</b></div>
        </div>
      </div>
    </div>`;
  });
  $('#dietContent').innerHTML = html;
}
if(currentWorkout && currentProfile){ /* prefill on load if returning user */ }

/* ==================== NEXT FILE SECTION ==================== */

/* ======================================================================
   EXERCISE LIBRARY
====================================================================== */
let libCategory = 'all';
let libSearchTerm = '';
let libFavOnly = false;
let favorites = store.get('fitai_favorites',[]);

function allExercisesFlat(){
  let out=[];
  Object.keys(EXERCISES).forEach(cat=>{
    EXERCISES[cat].forEach((ex,idx)=>out.push({...ex,category:cat,id:`${cat}-${idx}`}));
  });
  return out;
}
function renderCatTabs(){
  const cats = ['all',...Object.keys(EXERCISES)];
  $('#catTabs').innerHTML = cats.map(c=>`<div class="cat-tab ${c===libCategory?'active':''}" onclick="setLibCategory('${c}')">${c==='all'?'All':c.charAt(0).toUpperCase()+c.slice(1)}</div>`).join('');
}
function setLibCategory(c){ libCategory=c; renderCatTabs(); renderLibrary(); }
$('#libSearch').addEventListener('input',e=>{ libSearchTerm=e.target.value.toLowerCase(); renderLibrary(); });
$('#favFilterBtn').addEventListener('click',()=>{ libFavOnly=!libFavOnly; $('#favFilterBtn').classList.toggle('btn-primary',libFavOnly); renderLibrary(); });

function renderLibrary(){
  renderCatTabs();
  let list = allExercisesFlat();
  if(libCategory!=='all') list = list.filter(e=>e.category===libCategory);
  if(libSearchTerm) list = list.filter(e=>e.name.toLowerCase().includes(libSearchTerm)||e.target.toLowerCase().includes(libSearchTerm));
  if(libFavOnly) list = list.filter(e=>favorites.includes(e.id));
  $('#libGrid').innerHTML = list.length ? list.map(ex=>`
    <div class="glass-card lib-card" onclick="openExerciseModal('${ex.id}')">
      <i class="fa-solid fa-heart fav-btn ${favorites.includes(ex.id)?'active':''}" onclick="event.stopPropagation();toggleFavorite('${ex.id}')"></i>
      <div class="lib-thumb"><i class="fa-solid ${EX_ICONS[ex.category]}"></i></div>
      <h4>${ex.name}</h4>
      <span class="lib-tag">${ex.category} · ${ex.target}</span>
      <div style="margin-top:10px;">${difficultyBadge(ex.difficulty)}</div>
    </div>`).join('') : `<p class="section-sub">No exercises match your search.</p>`;
}
function toggleFavorite(id){
  favorites = favorites.includes(id) ? favorites.filter(f=>f!==id) : [...favorites,id];
  store.set('fitai_favorites',favorites);
  renderLibrary();
}
function openExerciseModal(id){
  const ex = allExercisesFlat().find(e=>e.id===id);
  if(!ex) return;
  $('#modalBody').innerHTML = `
    <div class="modal-hero"><i class="fa-solid ${EX_ICONS[ex.category]}"></i></div>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
      <h3>${ex.name}</h3>${difficultyBadge(ex.difficulty)}
    </div>
    <p class="section-sub" style="margin:10px 0 16px;">${ex.desc}</p>
    <div class="ex-meta" style="margin-bottom:10px;"><span><i class="fa-solid fa-bullseye"></i>${ex.target}</span><span><i class="fa-solid fa-fire"></i>~${ex.cal} kcal/set</span></div>
    <h5 style="color:var(--gold);margin:14px 0 6px;">Benefits</h5><ul style="padding-left:18px;">${(ex.benefits||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
    <h5 style="color:var(--gold);margin:14px 0 6px;">Steps</h5><ul style="padding-left:18px;">${(ex.steps||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
    <h5 style="color:var(--gold);margin:14px 0 6px;">Common Mistakes</h5><ul style="padding-left:18px;">${(ex.mistakes||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
    <h5 style="color:var(--gold);margin:14px 0 6px;">Tips</h5><ul style="padding-left:18px;">${(ex.tips||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
    <div style="background:var(--bg-card);border:1px dashed var(--card-border);border-radius:10px;padding:14px;margin-top:14px;font-size:.8rem;color:var(--text-dim);text-align:center;">
      <i class="fa-solid fa-video"></i> Video / GIF demo placeholder
    </div>`;
  $('#exModal').classList.add('show');
}
function closeModal(){
  const modal = $('#exModal');
  if(modal) modal.classList.remove('show');
}

const exModal = $('#exModal');

if(exModal){
  exModal.addEventListener('click', e => {
    if(e.target.id === 'exModal'){
      closeModal();
    }
  });
}

/* ==================== NEXT FILE SECTION ==================== */

/* ======================================================================
   CALCULATORS
====================================================================== */
function calcBMI(){
  const h = +$('#bmi_h').value/100, w = +$('#bmi_w').value;
  if(!h||!w) return toast('Please enter height and weight');
  const bmi = +(w/(h*h)).toFixed(1);
  let cat, color;
  if(bmi<18.5){cat='Underweight';color='#5fb0ff';}
  else if(bmi<25){cat='Normal';color='#5fd68a';}
  else if(bmi<30){cat='Overweight';color='#FFD700';}
  else {cat='Obese';color='#FF3B3B';}
  $('#bmiResult').innerHTML = `<div class="big">${bmi}</div><div>Category: <b style="color:${color}">${cat}</b></div>
    <div class="calc-scale"><div style="background:#5fb0ff;"></div><div style="background:#5fd68a;"></div><div style="background:#FFD700;"></div><div style="background:#FF3B3B;"></div></div>
    <div style="font-size:.75rem;color:var(--text-dim);display:flex;justify-content:space-between;"><span>Under</span><span>Normal</span><span>Over</span><span>Obese</span></div>`;
  $('#bmiResult').classList.add('show');
}
function calcCalories(){
  const age=+$('#cal_age').value, gender=$('#cal_gender').value, h=+$('#cal_h').value, w=+$('#cal_w').value, act=+$('#cal_activity').value;
  if(!age||!h||!w) return toast('Please fill all fields');
  const bmr = gender==='female' ? (10*w+6.25*h-5*age-161) : (10*w+6.25*h-5*age+5);
  const tdee = Math.round(bmr*act);
  $('#calorieResult').innerHTML = `<div class="big">${tdee} kcal/day</div><div>Maintenance calories (TDEE). BMR: ${Math.round(bmr)} kcal</div>
    <div style="margin-top:10px;font-size:.85rem;color:var(--text-dim);">Weight loss: ~${Math.round(tdee*0.8)} kcal &nbsp;|&nbsp; Muscle gain: ~${Math.round(tdee*1.15)} kcal</div>`;
  $('#calorieResult').classList.add('show');
}
function calcWater(){
  const w=+$('#water_w').value, factor=+$('#water_activity').value;
  if(!w) return toast('Please enter weight');
  const liters = (w*factor).toFixed(1);
  $('#waterResult').innerHTML = `<div class="big">${liters} L / day</div><div>≈ ${Math.round(liters*4)} glasses (250ml each)</div>`;
  $('#waterResult').classList.add('show');
}
function calcProtein(){
  const w=+$('#protein_w').value, factor=+$('#protein_goal').value;
  if(!w) return toast('Please enter weight');
  const p = Math.round(w*factor);
  $('#proteinResult').innerHTML = `<div class="big">${p} g / day</div><div>Spread across 4-5 meals (~${Math.round(p/4)}g each)</div>`;
  $('#proteinResult').classList.add('show');
}
$('#bf_gender').addEventListener('change',e=>{ $('#bf_hip_field').style.display = e.target.value==='female'?'flex':'none'; });
function calcBodyFat(){
  const gender=$('#bf_gender').value, h=+$('#bf_h').value, neck=+$('#bf_neck').value, waist=+$('#bf_waist').value, hip=+$('#bf_hip').value;
  if(!h||!neck||!waist) return toast('Please fill all measurements');
  let bf;
  if(gender==='male'){
    bf = 495/(1.0324-0.19077*Math.log10(waist-neck)+0.15456*Math.log10(h))-450;
  } else {
    if(!hip) return toast('Please enter hip measurement');
    bf = 495/(1.29579-0.35004*Math.log10(waist+hip-neck)+0.22100*Math.log10(h))-450;
  }
  bf = Math.max(3,Math.min(60,bf)).toFixed(1);
  let cat = bf<14?'Athletic':bf<21?'Fit':bf<28?'Average':'High';
  $('#bodyfatResult').innerHTML = `<div class="big">${bf}%</div><div>Category: <b style="color:var(--gold);">${cat}</b> body fat</div>`;
  $('#bodyfatResult').classList.add('show');
}

/* ==================== NEXT FILE SECTION ==================== */

/* ======================================================================
   PROGRESS DASHBOARD (Chart.js + localStorage)
====================================================================== */
let dashLogs = store.get('fitai_logs',[]);
let charts = {};

$('#logForm').addEventListener('submit',e=>{
  e.preventDefault();
  const entry = {
    date: new Date().toISOString().slice(0,10),
    weight: +$('#log_weight').value,
    water: +$('#log_water').value || 0,
    calories: +$('#log_calories').value || 0,
    workout: $('#log_workout').value==='yes'
  };
  dashLogs = dashLogs.filter(l=>l.date!==entry.date);
  dashLogs.push(entry);
  dashLogs.sort((a,b)=>a.date.localeCompare(b.date));
  store.set('fitai_logs',dashLogs);
  toast("Today's progress logged!");
  e.target.reset();
  renderDashboard();
});
function clearDashboard(){
  if(!confirm('Clear all logged progress data?')) return;
  dashLogs = []; store.set('fitai_logs',dashLogs); renderDashboard();
}

function chartTheme(){
  const dark = document.documentElement.getAttribute('data-theme')==='dark';
  return { grid: dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.08)', text: dark?'#9c9c9c':'#5c5c5c' };
}

function renderDashboard(){
  const th = chartTheme();
  const last7 = dashLogs.slice(-7);
  const curWeight = dashLogs.length? dashLogs[dashLogs.length-1].weight : '--';
  const weekCalories = last7.reduce((s,l)=>s+l.calories,0);
  const completion = last7.length? Math.round(last7.filter(l=>l.workout).length/last7.length*100)+'%' : '--';
  const avgWater = last7.length? (last7.reduce((s,l)=>s+l.water,0)/last7.length).toFixed(1) : '--';
  $('#kpiWeight').textContent = curWeight;
  $('#kpiCalories').textContent = weekCalories;
  $('#kpiCompletion').textContent = completion;
  $('#kpiWater').textContent = avgWater;

  const labels = last7.map(l=>l.date.slice(5));
  Object.values(charts).forEach(c=>c && c.destroy());

  charts.weight = new Chart($('#weightChart'),{type:'line',data:{labels,datasets:[{label:'Weight (kg)',data:last7.map(l=>l.weight),borderColor:'#FF3B3B',backgroundColor:'rgba(255,59,59,.15)',fill:true,tension:.35}]},
    options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:th.text},grid:{color:th.grid}},y:{ticks:{color:th.text},grid:{color:th.grid}}}}});

  charts.calorie = new Chart($('#calorieChart'),{type:'bar',data:{labels,datasets:[{label:'Calories Burned',data:last7.map(l=>l.calories),backgroundColor:'#FFD700',borderRadius:6}]},
    options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:th.text},grid:{color:th.grid}},y:{ticks:{color:th.text},grid:{color:th.grid}}}}});

  charts.water = new Chart($('#waterChart'),{type:'line',data:{labels,datasets:[{label:'Water (L)',data:last7.map(l=>l.water),borderColor:'#5fb0ff',backgroundColor:'rgba(95,176,255,.15)',fill:true,tension:.35}]},
    options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:th.text},grid:{color:th.grid}},y:{ticks:{color:th.text},grid:{color:th.grid}}}}});

  const doneCount = last7.filter(l=>l.workout).length;
  charts.goal = new Chart($('#goalChart'),{type:'doughnut',data:{labels:['Completed','Remaining'],datasets:[{data:[doneCount,Math.max(0,7-doneCount)],backgroundColor:['#FF3B3B','rgba(255,255,255,.08)'],borderWidth:0}]},
    options:{plugins:{legend:{labels:{color:th.text}}},cutout:'70%'}});
}

/* ==================== NEXT FILE SECTION ==================== */

