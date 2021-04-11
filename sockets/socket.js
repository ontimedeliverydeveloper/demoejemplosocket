const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    //io.set('origins', '*:*');
    console.log('Cliente conectado al server');

    //console.log(client.handshake);

        // var nroreserva = client.handshake.query['nroreserva'] != undefined 
        //                  ? client.handshake.query['nroreserva'] 
        //                  : client.handshake.headers['nroreserva'] != undefined 
        //                         ? client.handshake.headers['nroreserva']
        //                         :null;
        

    //console.log("Cliente conectado nro servicio :"+nroreserva);
      
    
    
    //if(nroreserva==null ){return client.disconnect()}




    // client.join(nroreserva);

    //  client.on('subcripcionConductor', ( payload ) => {
        
    //      io.to(nroreserva).emit('mensaje-coordenadas', payload );
    //  });


    client.on('subscribe',(canal)=>{
      console.log('se unio al canal',canal);
      client.join(canal);
    });

    client.on('unsubscribe',(canal)=>{
      console.log('salio del canal',canal);
      client.leave(canal);
    });

    client.on('send',(payload)=>{
        console.log("se envio un mensaje al canal",payload);
        io.to(payload.canal).emit("message",payload);
    });










    //TODO: socket para el servidor eh indicar que se creo una reserva

    





    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

});
