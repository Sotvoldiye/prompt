let meyor = 20

let belgi = prompt('Siz 20 martagacha belgi kiritishingiz mumkin')


  if(meyor === belgi.length) {
    alert(`Siz ${belgi.length} ta belgi kiritdingiz`)
  }
  else if (meyor > belgi.length) {
    alert(`Siz ${belgi.length} ta belgi kiritdingiz va siz yana ${meyor -belgi.length} ta belgi kiriting`)
  }
  else if (meyor < belgi.length) {
    alert(`Siz ${belgi.length} ta belgi kiritdingiz va siz ${belgi.length - meyor} ta belgi ko'p kiritgansiz`)
  }
