
$(document).ready(function(){
  
    totalupdate();
   
    function totalupdate()
    {
        var url = "https://api.covid19api.com/summary";
 
        var data = '';
        
        $.get(url, function(data){
             
             
            var total = data.Global.TotalConfirmed;
            var recovered = data.Global.TotalRecovered;
            var death = data.Global.TotalDeaths;
            var newcase = data.Global.NewConfirmed;
            $("#totalcase").text(total);
            $("#recovered").text(recovered);
            $("#death").text(death);
            $("#newcase").text(newcase);
            const total_country =  data.Countries.length;
            var vartvl = document.getElementById('countrydata');
            for(var i=1; i<=total_country;i++)
            {
                    var x = vartvl.insertRow();
                    x.insertCell(0);
                    x.insertCell(1);
                    x.insertCell(2);
                    x.insertCell(3);
                    x.insertCell(4);
                    x.insertCell(5);
                    x.insertCell(6);
                    x.insertCell(7);
                    vartvl.rows[i].cells[0].innerHTML = i;
                    vartvl.rows[i].cells[1].innerHTML = data.Countries[i-1]['Country'];
                    vartvl.rows[i].cells[1].style.background = '#F8F9FA';
                    vartvl.rows[i].cells[2].innerHTML = data.Countries[i-1]['NewConfirmed'];
                    vartvl.rows[i].cells[2].style.background = '#FFF3CD';
                    vartvl.rows[i].cells[3].innerHTML = data.Countries[i-1]['NewRecovered'];
                    vartvl.rows[i].cells[3].style.background = '#D1E7DD';
                    vartvl.rows[i].cells[4].innerHTML = data.Countries[i-1]['NewDeaths'];
                    vartvl.rows[i].cells[4].style.background = '#F8D7DA';
                    vartvl.rows[i].cells[5].innerHTML = data.Countries[i-1]['TotalRecovered'];
                    vartvl.rows[i].cells[5].style.background = '#D1E7DD';
                    vartvl.rows[i].cells[6].innerHTML = data.Countries[i-1]['TotalDeaths'];
                    vartvl.rows[i].cells[6].style.background = '#F8D7DA';
                    vartvl.rows[i].cells[7].innerHTML = data.Countries[i-1]['TotalConfirmed'];
                    vartvl.rows[i].cells[7].style.background = '#FFF3CD';               
            }

        });
    }
  });