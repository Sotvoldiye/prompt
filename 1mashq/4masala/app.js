const vNomi = prompt('Qaysi viloyat kerak')

switch (vNomi) {
  case "Farg'ona":
    alert(
      "Farg'ona viloyati aholisi 20000000 kishi")
    break;
  case 'Namangan':
    alert('Namangan viloyati aholisi 1400000 kishi')
    break;
  case  'Andijon':
    alert('Andijon viloyati aholisi 1500000 kishi')
    break;
  default:
    alert(`Bu ${vNomi} viloyat haqida bizda ma'lmot yoq`)
}