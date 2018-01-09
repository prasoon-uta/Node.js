var net = require('net')


function zeroFill(i)
{
	return (i<10 ?'0' : '') +i;
	
}

function now(){
	
	var dt = new Date()
	return dt.getFullYear()+"-"
	+ zeroFill(dt.getMonth()+1)+"-"
	+zeroFill(dt.getDate())+" "
	+zeroFill(dt.getHours())+":"
	+zeroFill(dt.getMinutes());
			
}



var server = net.createServer(function(socket){
	
	//socket listening logic
	
	
	
	socket.end(now()+"\n");
	
	
	
})

server.listen(Number(process.argv[2]))