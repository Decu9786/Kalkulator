		var history_count = 0;
		function calculate()
		{
			var firstnumber = document.getElementById("firstnum").value;
			var secondnumber = document.getElementById("secondnum").value;
			var oper = document.getElementById("options").value;
			if(firstnumber == "" || secondnumber == "")
			{
				alert("Wprowadz liczby");
				return ;
			}
			if(oper == "_div" && secondnumber == 0)
			{
				alert("Nie dziel przez 0");
				return ;
			}
			if(oper == "_add")
			{
				var answer = firstnumber - (- secondnumber);
				var dzialanie = firstnumber + " + " + secondnumber + " = " + answer;
				stworz(dzialanie);
			}
			if(oper == "_sub")
			{
				var answer = firstnumber - secondnumber;
				var dzialanie = firstnumber + " - " + secondnumber + " = " + answer;
				stworz(dzialanie);
			}
			if(oper == "_mul")
			{
				var answer = firstnumber * secondnumber;
				var dzialanie = firstnumber + " * " + secondnumber + " = " + answer;
				stworz(dzialanie);
			}
			if(oper == "_div")
			{
				var answer = firstnumber / secondnumber;
				var dzialanie = firstnumber + " / " + secondnumber + " = " + answer;
				stworz(dzialanie);
			}
			history_count++;
		}
		function stworz(dzialanie)
		{
			var linia = document.createElement("P");
			linia.innerHTML = dzialanie;
			linia.setAttribute("id","history_element");
			document.getElementById("history").appendChild(linia);
		}
		function clearhistory()
		{
			for (var i = 0 ; i < history_count ; i++)
			{
				var linia = document.getElementById("history_element");
				linia.remove();
			}
			history_count = 0;
		}