var numValida = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6];
function isValidCard(numValida){
    var LongitudCadena = numValida.Length;
    var reversCard = numValida.reverse;
  for (var i=0; i>numValida; i++){
            if (i % 2 == 0){
              intImpar += (parseInt(arrNumero.values(i)) – 48);
    }else{
       var intTemp = (Convert.ToInt32(arrNumero[i]) – 48) * 2;
       if (intTemp > 9){
           intTemp = intTemp – 9;
                  }
  intUniforme += intTemp;
   }
  }
  if ((intImpar + intUniforme) % 10 == 0)
  return true;
  else
  return false;
  }
  }
}


// 1 public static  bool ValidaModulo10(string strNumeroValidar){     {
//       strNumeroValidar = Regex.Replace(strNumeroValidar, @”[^0-9]”, “”);

//   4         int LongitudCadena = strNumeroValidar.Length;

//   5         int intImpar = 0;

//   6         int intUniforme = 0;

//   7

//   8         char[] arrNumero = new char[LongitudCadena];

//   9         arrNumero = strNumeroValidar.ToCharArray();

//  10         Array.Reverse(arrNumero, 0, LongitudCadena);