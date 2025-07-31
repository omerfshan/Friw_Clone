import { useState } from "react";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


function GameCard({ title, image, description }) {
  const [isfavorite,setfavorite]=useState(false);
  return (
    <div className="card h-100 shadow-sm rounded overflow-hidden">
      <span className="position-absolute top-0 end-0 m-2"
      onClick={()=>setfavorite(!isfavorite)}
      >
        
        <i c className={`bi ${
           isfavorite ? "bi-heart-fill text-danger":"bi-heart text-secondary" 
          }`} style={{fontSize:"22px"}}
          >


        </i>
      </span>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column bg-light">
        <h5 className="card-title">{title}</h5>
        <p className="card-text small flex-grow-1">{description}</p>
        {/* <button className="btn btn-primary mt-auto">Oyna</button> */}
      </div>
    </div>
  );
}



// card	Bootstrap kart bileşeni – kenarlıklı, kutulu bir içerik alanı tanımlar
// h-100	Yüksekliği %100 yapar (ebeveyni kadar yüksek olur)
// shadow-sm	Hafif bir gölge efekti verir
// rounded	Köşeleri yuvarlatır (default Bootstrap border-radius)
// overflow-hidden	İçerik dışına taşarsa gizler (örneğin büyük resimler taşmaz)
// card-body	Kartın içerik alanını tanımlar
// d-flex	Flexbox düzenini aktifleştirir
// flex-column	Elemanları dikey olarak sıralar (üst üste)
// bg-light	Açık gri arka plan verir (görsel kontrast için)
// card-text	Paragrafın içeriğini stilize eder (Bootstrap uyumu için)
// small	Yazıyı biraz küçültür
// flex-grow-1	Mevcut boş alanı bu elementin kaplamasını sağlar (butonu alta iter)
// card-text	Paragrafın içeriğini stilize eder (Bootstrap uyumu için)
// small	Yazıyı biraz küçültür
// flex-grow-1	Mevcut boş alanı bu elementin kaplamasını sağlar (butonu alta iter
// btn	Bootstrap buton stillerini aktifleştirir
// btn-primary	Mavi renkte, vurgulu bir buton oluşturur
// mt-auto	Yukarıdan otomatik boşluk (margin-top) ekler → buton aşağı itilir
export default GameCard;