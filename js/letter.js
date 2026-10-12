const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy Birthday นะคะคนเก่งของเค้า 🤍🎂

ขอให้ปีนี้ใจดีกับเธอมากๆ ขอให้ทุกความฝันที่เธอตั้งใจ ค่อยๆกลายเป็นความจริงและได้พบเจอแต่เรื่องราวดีๆ ผู้คนที่รักและหวังดีกับเธอ

ไม่ว่าเส้นทางข้างหน้าจะเป็นยังไง ขอให้รู้ไว้นะว่าเค้าจะคอยอยู่ข้างๆและเป็นกำลังใจให้เธอในทุกความฝัน วันที่เหนื่อยก็พักได้ ไม่ต้องเก่งตลอดเวลา 
ขอแค่เธอมีความสุขในแบบของตัวเองก็พอ

ขอบคุณที่เกิดมาให้เค้าได้รักนะ
ขอให้ปีนี้เธอยิ้มได้เยอะๆและมีความสุขมากกว่าเดิม 🤍

รักเธอมากๆเลยนะคะ🫶🏻

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
