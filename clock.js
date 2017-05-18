$(document).ready(function(){
	function displayTime(){
		var period = "AM"
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		var clock = document.getElementById('clock');
		var clockr = document.getElementById('clockr');
		var clockl = document.getElementById('clockl');
		var clock2 = document.getElementById('clock2');
		var clock2r = document.getElementById('clock2r');
		var clock2l = document.getElementById('clock2l')
		var clock3 = document.getElementById('clock3');
		var clock3r = document.getElementById('clock3r');
		var clock3l = document.getElementById('clock3l')
		var clock4 = document.getElementById('clock4');
		var clock4r = document.getElementById('clock4r');
		var clock4l = document.getElementById('clock4l')
		var clock5 = document.getElementById('clock5');
		var clock5r = document.getElementById('clock5r');
		var clock5l = document.getElementById('clock5l')
		var clock6 = document.getElementById('clock6');
		var clock6r = document.getElementById('clock6r');
		var clock6l = document.getElementById('clock6l')
		if(seconds < 10){
			seconds = "0" + seconds
		}
		if(minutes < 10){
			minutes = "0" + minutes
		}
		if(hours > 12){
			hours = hours - 12
			period = "PM"
		}
		if(hours === 0){
			hours = 12
		}
		clock.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock2.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock3.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock4.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock5.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock6.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clockr.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock2r.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock3r.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock4r.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock5r.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock6r.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clockl.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock2l.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock3l.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock4l.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock5l.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
		clock6l.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
	};
		displayTime();
		setInterval(displayTime, 1000);
});
