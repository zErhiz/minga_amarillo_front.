1-El primer paso es ir a mercadopago.com/developers/panel y crear una aplicación.

2-Vamos a nuestra terminal e instalamos los packages de mercado con el comando npm install mercado pago y npm install @mercadopago/sdk-react

3-Creamos el componente necesario para renderizar la pagina de donaciones. Debemos importar initMercadoPago y Wallet (especificados en la documentación). Estos serán los componentes de la API que utilizaremos para realizar la donacion.

4-Luego debemos regresar a la página especificada en el PASO 1, una vez en la página, vamos a nuestra aplicacion y a nuestras credenciales de prueba. De allí tomaremos  la key de prueba y la utilizaremos dentro del componente Donation.jsx  con el comando init('NUESTRA-KEY-DE-PRUEBA').

5-Por último, utilizamos el componente <Walletinitialization={{ -nuestras preferencias- }}> de Mercado Pago en el sitio del componente Donation que creamos más util o conveniente. De esta forma ya tenemos configurada la API del lado de nuestro FRONT-END.
