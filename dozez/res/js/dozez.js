$(document).ready(function(){
  $("#age").keyup(function(){
    $("#propo").html(
										 "<small class='asa'>ASA 1/2 o <55y</small><br/>" +
                     "&#8623; " + (2*$("#age").val()).toFixed() + "-" + (2.5*$("#age").val()).toFixed() + " <small>mg <dfn class='di'>[2 - 2.5 mg/kg]</dfn></small>" +
                     "<br/>" +
										 "&#8669; " + (0.1*$("#age").val()).toFixed() + "-" + (0.15*$("#age").val()).toFixed() + " <small>mg/min</small> + " + (0.15*$("#age").val()).toFixed() + "-" + (0.45*$("#age").val()).toFixed() + " <small>ml/h <dfn class='di'>[0.1-0.15 + 25-75 &gamma;/kg/min]</dfn></small>" +
                     "<br/>" +
										 "<small class='asa'>ASA 3/4 o >55y</small><br/>" +
										 "&#8623; " + (1*$("#age").val()).toFixed() + "-" + (1.5*$("#age").val()).toFixed() + " <small>mg  <dfn class='di'>[1 - 1.5 mg/kg]</dfn></small>" +
                     "<br/>" +
                     "&#8669; " + (0.08*$("#age").val()).toFixed() + "-" + (0.12*$("#age").val()).toFixed() + " <small>mg/min</small> + " + (0.12*$("#age").val()).toFixed() + "-" + (0.36*$("#age").val()).toFixed() + " <small>ml/h <dfn class='di'>[0.08-0.12 + 20-60 &gamma;/kg/min]</dfn></small>" +
										 "<br/>" +
										 "<small class='asa'>TIVA</small><small><dfn class='di'> Roberts 1-10-8-6 model</dfn></small>" +
										 "<br/>" +
										 (1*$("#age").val()).toFixed() + "<small>	&#x27AA; </small>" + (10*$("#age").val()).toFixed() + "<small> (0-10&rsquo;) &#x27AB; </small>" + (8*$("#age").val()).toFixed() + "<small> (10-20&rsquo;) &#x27AC; </small>" + (6*$("#age").val()).toFixed() + "<small> (>20&rsquo;) mg/h</small>"
                     );
    $("#nimbex").html(
                    "&#8623; " + (0.15*$("#age").val()).toFixed() + "-" + (0.2*$("#age").val()).toFixed() + " <small>mg <dfn class='di'>[0.15 - 0.2 mg/kg]</dfn></small>" +
                    "<br/>" +
                     "&#8614; " + (0.03*$("#age").val()).toFixed() + " <small>mg q20m <dfn class='di'>[0.03 mg/kg]</dfn></small>"
                    );
    $("#esmeron").html(
                    "&#8623; " + (0.45*$("#age").val()).toFixed() + " - " + (0.6*$("#age").val()).toFixed() + " - " + (1.2*$("#age").val()).toFixed() + " <small>mg <dfn class='di'>[0.45 - 0.6 - 1.2 (RSI) mg/kg]</dfn></small>" +
                    "<br/>" +
                     "&#8614; " + (0.1*$("#age").val()).toFixed() + "-" + (0.2*$("#age").val()).toFixed() + " <small>mg <dfn class='di'>[0.1 - 0.2 mg/kg]</dfn></small>"
                    );
    $("#naro").html(
                    "<dfn class='db'>2mg/kg<br/>Onset: 5 - 15 min; Durata >3 h</dfn>" + 
                    "&bull; 0,2%: " + (1*$("#age").val()).toFixed() + " <small>ml</small>" +
                    "<br/>" +
                     "&bull; 0,375%: " + (0.5333*$("#age").val()).toFixed() + " <small>ml</small>" +
                     "<br/>" +
                     "&bull; 0,5%: " + (0.4*$("#age").val()).toFixed() + " <small>ml</small>"
                    );
    $("#carbo").html(
                    "<dfn class='db'>5mg/kg (7mg/kg + Adrena) - max 400mg<br/>Onset: 3 - 5 min; Durata 45 - 90 min</dfn>" +
                    "&bull; 1%: " + (0.5*$("#age").val()).toFixed() + " <small>ml (max 40ml)</small>" +
                    "<br/>" +
                     "&bull; 2%: " + (0.25*$("#age").val()).toFixed() + " <small>ml (max 20ml)</small>" +
                     "<br/>" +
                     "&bull; 2% + Adrena: " + (0.35*$("#age").val()).toFixed() + " <small>ml (max 20ml)</small>"
                    );
		$("#chiro").html(
                    "<dfn class='db'>2mg/kg - max 150mg<br/>Onset: 10 - 15 min; Durata 3 - 10 h</dfn>" + 
                    "&bull; 0,25%: " + (0.8*$("#age").val()).toFixed() + " <small>ml (max 60ml)</small>" +
                    "<br/>" +
                     "&bull; 0,5%: " + (0.4*$("#age").val()).toFixed() + " <small>ml (max 30ml)</small>" +
                     "<br/>" +
                     "&bull; 0,75%: " + (0.257*$("#age").val()).toFixed() + " <small>ml (max 20ml)</small>"
                    );
		
		$("#refer").removeClass("display-none"); //mostra lo switch dei valori di riferimento appena si digita il peso
		$("input#checkbox1").prop('checked', false); //resetta lo switch quando si modifica un peso già inserito
    $("dfn").removeClass("display-inline"); //ridondanza necessaria per eliminare i val di rif degli anest locali quando si modifica il peso già inserito
  }); //keyup sul peso
    $("#remi").keyup(function(){
      $("#ultiva").html(
                    " &#8669; " + ( ( (50*$("#remi").val()) / 60)/($("#age").val()) ).toFixed(3)+  " &gamma;/kg/min"
                    );
    });
		
   // ************** START SECTION PARACETAMOLO 
    $("input#Paracet").keyup(function() {
			var start1 = $('input#Paracet').val();
			var orig1 = new Date(2000, 11, 11, start1);
			orig1.setHours(orig1.getHours()+8);
			var orig2 = new Date(2000, 11, 11, start1);
			orig2.setHours(orig2.getHours()+16);
			var orig3 = new Date(2000, 11, 11, start1);
			orig3.setHours(orig3.getHours()+6);
			var orig4 = new Date(2000, 11, 11, start1);
			orig4.setHours(orig4.getHours()+12);
			var orig5 = new Date(2000, 11, 11, start1);
			orig5.setHours(orig5.getHours()+18);
 
			$("#echo").html(" q8h: " + start1 + "-" + orig1.getHours() + "-" + orig2.getHours() + " &nbsp;&nbsp; q6h: " + start1 + "-" + orig3.getHours() + "-" + orig4.getHours() + "-" + orig5.getHours());
  });
	//********END SECTION paracetamolo 
	
	// MOSTRA I VALORI DI RIFERIMENTO	AL CLICK DELLO SWITCH
	$("#checkbox1").click(function() {
    $("dfn.di").toggleClass("display-inline");
    $("dfn.db").toggleClass("display-block");
    });
  
/*$('#checkbox1').change(function(){
  if($(this).prop("checked")) {
    $("dfn").addClass("display-inline");
  } else {
    $("dfn").removeClass("display-inline");
  }
});*/
  
	}); //document ready