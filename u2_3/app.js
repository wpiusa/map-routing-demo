
angular.module('myApp', [])
    .controller('MyCtrl', function() {
       vm=this;
      // vm.myEarningTipTotal=0;

       vm.submit=function(){
          var baseMeal=vm.calForm.baseMeal;
          var taxRate=vm.calForm.taxRate;
          var tipPercent=vm.calForm.tipPercent; 
          var taxAmount=(taxRate/100)*baseMeal;
         
          vm.calForm.custChargeSubTotal=baseMeal+taxAmount;
          vm.calForm.custChargeTip=(tipPercent/100)*baseMeal;
          vm.calForm.custChargeTotal=vm.calForm.custChargeSubTotal+vm.calForm.custChargeTip;

          if (vm.calForm.myEarningTipTotal==null){
             vm.calForm.myEarningTipTotal=vm.calForm.custChargeTip;
             vm.calForm.myEarningMealCount=1
             vm.calForm.myEarningAvgTip=vm.calForm.myEarningTipTotal;
          }else{
             var totalMyTip=vm.calForm.myEarningTipTotal+vm.calForm.custChargeTip;
             vm.calForm.myEarningTipTotal=totalMyTip;
             vm.calForm.myEarningMealCount=vm.calForm.myEarningMealCount+1;
             vm.calForm.myEarningAvgTip=vm.calForm.myEarningTipTotal/vm.calForm.myEarningMealCount;
          }

         
       };
  
       vm.cancel=function(){
        
        vm.calForm.baseMeal=null;
        vm.calForm.taxRate=null;
        vm.calForm.tipPercent=null;
       }

       vm.reset=function(){
        vm.calForm={};
       }
       //   myEarningAvgTip

});


