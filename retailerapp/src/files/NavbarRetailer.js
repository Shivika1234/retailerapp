import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

 export default function NavbarRetailer() {

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <div>
        <Header
        style={{
            height:'4.5vw',
          padding: 0,
          backgroundImage:"url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw8PDxIPDw8PEA8PDw8PDw8PEA8PFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8PFy0dFR0tLS0tKysrLS0tLS0rLS0rLSsrLSstKy0tKy0tKy0tLS0rLSstLSstLSstLi0tMCstLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAgMBBAUH/8QAMxAAAgIBAgMGBQMDBQAAAAAAAAECERIDIQQxQRMiUWFxgZGhscHwBTLRFGJyBiNCUvH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEBAQEAAgEEAwAAAAAAAAARARICAxNhMVKBkSEiUf/aAAwDAQACEQMRAD8A+O6678/8pfUWWm1V9UpLdPZ8uRfidJqTbrvOUlUovbJreuT25MjR6I5UqX5zChqChCkoKHoKEKSgoej1dCPB/wBJqZvV/qu0hgko4YVK/PwLnmlePRtD1+fnsamsWq3bTUrdpK7Vct7Xw9SQqVBQ9BiIUR001J3FYpNRd3K3VLbpz38BKHoKEKSgorFLe75Oqr93S/IWhCkoKHoKEKVIyh6ChCkoKHX8/PZhQhV9bg1HS09TOEnNyT003nCq3kvOznjFdXWz6XvWy+JtBQKSgoeh5aUkoyapTTcX4pOn80xCpUZQ9BQhSUFD0FCFKl4/yZQ9BQhWdm6y6XXNc+fLmLQ9DPTaSltUm0t03tV2ua5rnz9mIVKjRqAQq2su/L/J/UVLff5bHQ54ynsneS3V1b5rzI0bjFJ9v/fuwore1Uuad1vte1+G/wAkZX5SLCp0FFEh9XG3haj0Uqb+JIVJbO9ns1ul1VPb32foxaHoKLCkoKHo2iQqdGxbV02rVOnVp9H5DpGUWFJQUPR0cLwy1FqNzhDCDmlNtZv/AKx8xnnd2YVyUM22kuitpeF1f0Q2L+3LqFdBCn0OC1NSE5wi3HSSc5JbRTaSv3aIUVjJpNJtJ8/Bi0IUlBQ9BRIUriCg3dW6VvyVpW/dpe41BQhSUFFo6UnGUku7Csn4XyEosKSgxKJczKEKSgoegokKJycqtLuxUVUUtt+dc3vzYlFtTScXUlT22fxFUS7hU6BIpRst30WyWypbJK/lYhUqCilGUSFJQD0aIVXVXel/k/qZCFurS57u65WU1V3per+pkoNc+qT9nujpmM1OgoehtKKbSk8Y9Wlk17CJUqCh6ChCkoMR6ChCp0NNttuTbb3bk22/NtjUFCFJQUPQUIUlGUVi2uXRp+6B7u/HcQqdGUUoBCkoKKLbpdrre3mqfMzEQpKCh6ChCkoGh6AQqeJtD0FCFJQfD4D0FCFIo/nIfRm4SUkk2ndNKS+DOjhtaMFqKWnGbnHGLllcHadqmt9q38TnoQrv/X/1aXG6vaSjpwqMIpQhGC2il0Xkea0PRbiuEnoyUdSOLcYzS2fdkrT28i7m7/krmo2ELdWl5u6Q1AkSFI9/Xe/AB6BIQpMfT5gPQCFW1V3per+piUad3laqqxre78+XzKaq70vVi0dMxmp0FD0bj9hEpK+P2Ch6MoQpKCjq13puOngpKSjWo5NNSnb3j4KqI0N8wpKOjh9HSlp6kpzcZxS7OKjam73t3tsTXX8syhCp0akPRlCLSUFFKCO3h15q/IRKnQUPQUIUlBQ9BRIUlBQ9DSdpKlttaVN7t7+PMsKlQ1usdqu+Su+XPn05G0FCLSUakPRlEiUlGqP54j0ZRYUuIJD0AhSUD3HAQpKCh3GjKEKNRRvu5VS/dV3Svl52JRSgoQqdAU3ARarqrvP1f1McSs13perFo3HOp0enw/HaUeG1dF6MJak5wlHVbllFJSvrXVHBRlFhSUFFKMokKSgookZQhSpfnyL8FwnauSyhDGEp991lSul5kqNoQqeIUUoElvd8ttrt/bqWFToKKUZRIUlDOMaVXlvlaVLwp3ubQUWFJQUVa67b9EZRIVOgopQUIVvCxg5x7RtQtZuKuSj1pGa8Y5Swtwt4uSptdLMo2hCp0FFKMoQpKCh6NaEKnQUWhpylslKVJukm6S3b9BUi8lTxCilet/YKJCslOTdtttJJO3ySqvSthcP5Hca8V4X4BRYVOgxOzhI6Xf7VzXceGCTufS76HNRIUlAPQCFW1Fu/Vi0V1Fu/Vi0dIxS9fxGUPRtCFTo1r39eY6j6BQhSYqvO+VbV6ntfo/8ApviOL09bUhG1paeXOKuqR49HVwnG6mlHUjGTS1I4ypvdCFcurouDqWzQjRRoKEKniFFKChClUVUrtOljsqu+vsLRSgSEKniGP5simIYiFIkYolcQxEKliFFcQxEKliNe2NLZt3Sy6Km/DbkPRlCFToKKtcv4FxEKTEMR6ChCt0dWenbhJxcouLxdXF80/IniPRqQKniFFtSTk3J1b3dJJfBCqK/PEQpJNvm26SW7bpLZIzEpQOIhU6CilBQhU8QHoBCrTVSfrYtFtRbv1YlBy6JQY9fHkUoygdExCilBQOk6CilBQOk6+AKJTE3EHSWJtUUxGlFdL5K7rn19ip0k1fy/gMSuIYg6SxNxK4hiVOksQxK4hiDpLEJbu3XRbJLkq6FcQxB0jiZiWxDEi9I4hiWcTMQdJVXw6r2+hlFcTMQvSbjy+XmgxKYhRDpNJdfelY0KtZJtdUni2vWnRtGpLr8hTpOgxKUZQOiUDjX5ZSVttvm92FA6ToClGA6Wmt36sWi047v1YuJlx6To1Lnsvnt6fnUfEMSp0nQUUxDEHSeJqiUUTVEHSeJqiUURsSp0libiVxNUSp2jibgXUTVAqdoYm4FsDcAnaGIYl8AwB2hiZidGAYA7c+BjidGBmAO3PiZidDgLiRrtBxMxLuJmJF6QxBxLOIriRekqBopiGIOk6CimJrjW30aa+KB0lQUUxDEh0nQFk2uTfxMKdKzju/Vi4lprd+rFxMuPSeJrV89x6CgdJ4m4lMTVEJ0momqJRRHUSs9JKIygVURlArO+0VAZQLKAygaZ32ioGqBdQGUCs78jnwNwOjA3AqfY58AwOnAMAn2OXAMDpwM7MH2ObAVwOpwMcCNZ8jlcBXA6nAVwI125XAxxOhwFcSNZ7c7iZiXcRXEy12hiZiXcRcSNdJYhiUxNS/GF6SxDEpQYg6TxApiATpacd36sWi047v1YuJmuO+k6NUR8TVEJ0TE1RKKIyiVnfSaiOojqI6iVnfaagOoFFEdQLWN9pKA6gVUCigac9+RFQGUC6gMtMrG/I51pjdmdK0zVplrH2Obsw7M6uzDsxU+1ydmY9M7OzFemF+xxvTFcDsemK9Mlaz5HG4CuB1uAjgRvPkcjgI4HW4COBmume3K4iOJ0uAriRvPbmcRXE6HEVxI3ntDEyiziZiGuksQopiGJDpPE0fEAdLTju/VmYlZrd+rMojjvpPE1RHxGUQzvoiiOojKI6iVnfRVEZRGUSiiVz30WMR4xGjEpGJXPfZYxKKJsYlIxK5b7KojqI6iV0oJtW6Vq2lbS6ujTnvtJQGUD1f6fhtu/JbK1dq633xt79UvgPPhOHVd+W9NU06V9dtvt5me8dN+H1+7P7eTgGB6q0OHtLJtPO220+lf8duvjflZXgNPh4ayWo8oYp5STcU3vi0v7Xz6SQ31+E8/Fu7mdZl2fq8RwFcD3Hp8I3qJ5RXaJQlHL9iSTaTT6tvffajXwXB02taeyb3SXVJVt3ufv/aTv8a3nwet/T153+XgOIkonq/quloqf+w7g1v8Au2fhvv53fXyOBxNZtyufr/T1vm2f8csok3E6pRJyiGs9uaUSconTKJOUTLpntzuIjidDiI4kdM9udxEcTocRHEjpnpBxFcS7iK4kbz0liGJTEKC9J4gUoAdLTju/Vi4gBlx3WqIyRgFTdOojKJoFY3TKI6iAFY3VIxKKJgGnLdUjEpGIAaxy3VIxKRiAGnLdUUR1EwCuW6fAMQArNY4iOJoBrNTcScogBnXTNTlEnKIAZdc1NxJyiAGXXNI0TcQAmuuaRoVxADLeaVxFaACN5pcQxAA0MQAAP//Z)",
          // backgroundColor:"#2C2B30",
          // backgroundColor:"#F58F7C",
          backgroundColor:"#17252A",
          // backgroundColor:'rgb(33,37,41)',
          // background: 'colorBgContainer',
          // backgroundColor:'#002140',
          // backgroundColor:'#77E5E5',
          position:'relative'

        }}
      > 
      <p style={{color:"white",float:"right",marginRight:"1vw",alignItems:"center"}}> Shreya Jain </p> 
     <img  style={{height:"2.5vw",width:"3vw",borderRadius:"2vw",float:"right",marginRight:"1vw",marginTop:"0.8vw"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNNE2la9vfc01CPWiygaruJgbWA-shldvrg&usqp=CAU'/>
      </Header>
      
        </div>
    );
}

