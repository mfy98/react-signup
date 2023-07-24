import React, { useState } from 'react';
import './SignUpForm.css';
import axios from 'axios';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [workPlacePhoto, setworkPlacePhoto] = useState(null);
  const [certPhoto, setCertPhoto] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [activeMenu, setActiveMenu] = useState('left');

  const axios = require('axios');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      username,
      password,
      passwordVerify,
      firstName,
      lastName,
      city,
      phone,
      email,
      photo,
      workPlacePhoto,
      certPhoto
    });
    if(!isChecked){
      alert("Hizmetler ve Şartları kabul etmelisiniz.")
    }
  };

  const handleClick = () => {
    setActiveMenu(activeMenu === 'left' ? 'right' : 'left');
  };




  const handlePhotoUpload = (event) => {
    setPhoto(event.target.files[0]);
  };
  
  const handleWPPhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    setworkPlacePhoto(files);
  };
  const handleCertPhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    setCertPhoto(files);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function onClickColorChanger(){
    
  }

  return (
    <>
        <h1> Satıcı Üye Kayıt Formu </h1>
        <p> Merhaba, hijyen ve güvenilirlik bizim için çok önemli. Bu yüzden sizden bilgilerinizin doğruluğu konusunda samimi olmanızı rica ediyoruz. Eğer yemek hizmeti vermek istiyorsanız, yemeği hazırladığınız yer ile ilgili en az 2 fotoğraf göndermenizi isteyeceğiz. Eğer ürün (aksesuar vb.) hizmeti verecekseniz bu kısmı atlayabilirsiniz. Ayrıca, yaptığınız işle ilgili herhangi bir sertifikanız var ise ekleyebilirsiniz.</p>
        <div className='menu'>
      <div
        className={`left-menu ${activeMenu === 'left' ? 'active' : ''}`}
        onClick={handleClick}
      >
        <p>Yemek</p>
      </div>

      <div
        className={`right-menu ${activeMenu === 'right' ? 'active' : ''}`}
        onClick={handleClick}
      >
        <p>Ürün</p>
      </div>
    </div>
    <form className='signUpForm' onSubmit={handleSubmit}>
      <form-left>
      <label className='signUpLbl'>
        
        <input type="text" placeholder="Kullanıcı adınız" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label className='signUpLbl'>
      
        <input type="password" placeholder="Şifreniz" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label className='signUpLbl'>
        
        <input type="password" placeholder="Şifrenizi doğrulayınız" value={passwordVerify} onChange={(event) => setPasswordVerify(event.target.value)} />
      </label>
      <br />
      <label className='signUpLbl'>

        <input type="text" placeholder="Adınız" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <br />
      <label className='signUpLbl'>

        <input type="text" placeholder="Soyadınız" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <br />
      <label className='signUpLbl'>

        <input type="text" placeholder="Şehriniz" value={city} onChange={(event) => setCity(event.target.value)} />
      </label>
      <br />
      <label className='signUpLbl'>

        <input type="text" placeholder="Telefon Numaranız (XXX) XXX XX XX" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <label className='signUpLbl'>

        <input type="email" placeholder="E-Mail Adresiniz" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      </form-left>
      <form-right>
      
      <input className='btn-input' type="file" accept="image/*" onChange={handlePhotoUpload} />
      <input className='btn-input' type="file" accept="image/*" onChange={handleWPPhotoUpload} />
      <input className='btn-input' type="file" accept="image/*" onChange={handleCertPhotoUpload} />
      <label className='lbl-terms-conditions'>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <a href='#'>Hizmet ve Şartları</a> Kabul Ediyorum
      </label>
      <button className='btn-signUp' type="submit">Kayıt Ol</button>

      </form-right>
            
    </form>
    </>
    
  );
}

export default SignUpForm;