
import {TextGeometry} from "../js/TextGeometry.js";
import {FontLoader} from "../js/FontLoader.js";
import * as THREE from "../js/three.module.js";
export default function Cartel({x, y, z}){







var geometry01 = new THREE.BoxGeometry(5,40,3);
var material1 = new THREE.MeshLambertMaterial({
  color:0xFF82E2, side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material1);
//scene.add(gmesh01);
mesh01.position.set(-25,15,70);
mesh01.receiveShadow = true;

    var geometry02 = new THREE.BoxGeometry(40,25,3);
var material2 = new THREE.MeshLambertMaterial({
  color:0xFF82E2, side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02,material2);
//scene.add(mesh02);
mesh02.position.set(-25,35,70);
mesh02.receiveShadow = true;

      
//letras

//primer texto

var loader = new FontLoader();
var font = loader.parse(fontJSON3);
var geometry03 = new TextGeometry('Y ESTA VA POR',{
    font: font,
    size: 1.7,
    height: 2,
});

geometry03.center();

var material03 = new THREE.MeshLambertMaterial({
    color:0x1F1F1F,
    emissive:0x1F1F1F,
    
});

var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(-25,44,71);
mesh03.castShadow = true;




var loader = new FontLoader();
var font = loader.parse(fontJSON3);
var geometry04 = new TextGeometry(' LOS QUE YA NO ESTAN',{
    font: font,
    size: 1.7,
    height: 2,
});

geometry04.center();

var material04 = new THREE.MeshLambertMaterial({
    color:0x1F1F1F,
    emissive:0x1F1F1F,
   
});

var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(-25,41,71);
mesh04.castShadow = true;





var ggeometry01 = new THREE.SphereGeometry( 3, 32, 16, 0, 3.1416 );
var gmaterial01 = new THREE.MeshLambertMaterial({
  color:0xC4A256, side: THREE.DoubleSide
});
var gmesh01 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh01);
gmesh01.castShadow = true;
gmesh01.position.set(0,23,0);
gmesh01.rotation.set(-1.57,0,0);


var ggeometry02 = new THREE.CylinderGeometry(3,3,20,20);
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial01);
//scene.add(gmesh02);
gmesh02.castShadow = true;
gmesh02.position.set(0,13,0);

var ggeometry03 = new THREE.CylinderGeometry(1,1,2,20);
var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial01);
//scene.add(gmesh03);
gmesh03.castShadow = true;
gmesh03.position.set(0,26,0);

var ggeometry04 = new THREE.CylinderGeometry(1,1,3,20);
var gmaterial02 = new THREE.MeshLambertMaterial({
  color:0xB0B0B0, side: THREE.DoubleSide
});
var gmesh04 = new THREE.Mesh(ggeometry04,gmaterial02);
//scene.add(gmesh04);
gmesh04.castShadow = true;
gmesh04.position.set(0,28.5,0);


var ggeometry05 = new THREE.TorusGeometry(1,0.2,5,30);
var gmaterial03 = new THREE.MeshLambertMaterial({
  color:0x261E1E, side: THREE.DoubleSide
});
var gmesh05 = new THREE.Mesh(ggeometry05,gmaterial03);
//scene.add(gmesh05);
gmesh05.castShadow = true;
gmesh05.position.set(0,30,0);
gmesh05.rotation.set(1.57,0,0);


var ggeometry06 = new THREE.CylinderGeometry(1.1,1.1,1,20);
var gmesh06 = new THREE.Mesh(ggeometry06,gmaterial02);
//scene.add(gmesh06);
gmesh06.castShadow = true;
gmesh06.position.set(0,30.5,0);


//Etiqueta

var ggeometry07 = new THREE.CylinderGeometry(3.1, 3.1, 18, 20,10,false,3.5,5.4);
var texture1 = new THREE.TextureLoader().load("./assets/etiquetatequila2.png");
var material04 = new THREE.MeshLambertMaterial({ map: texture1 });
var gmesh07 = new THREE.Mesh(ggeometry07, material04);
//scene.add(gmesh07);
gmesh07.castShadow = true;
gmesh07.position.set(0,14,0);
gmesh07.rotation.set(0,0,0);



var tequila = new THREE.Group();
tequila.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,
gmesh07
);
//scene.add(tequila);
tequila.position.set(-39,27,73);
tequila.scale.set(0.6,0.6,0.6);
tequila.rotation.set(0,0,-1.);
tequila.castShadow = true; 




var ggeometry001 = new THREE.CylinderGeometry(2,1.3,7,20);
var material001 = new THREE.MeshLambertMaterial({
    color:0xADADAD, side: THREE.DoubleSide, transparent: true,   opacity: 0.5
});
var gmesh001 = new THREE.Mesh(ggeometry001,material001);
//scene.add(gmesh01);
gmesh001.position.set(0,10,0);
gmesh001.castShadow = true; 


var ggeometry002 = new THREE.CylinderGeometry(1.5,.8,6.2,20);
var material002 = new THREE.MeshLambertMaterial({
    color:0xDE7F00, side: THREE.DoubleSide, 
});
var gmesh002 = new THREE.Mesh(ggeometry002,material002);
//scene.add(gmesh02);
gmesh002.position.set(0,10,0);
gmesh002.castShadow = true; 



var ggeometry003 = new THREE.CylinderGeometry(1,.9,1,20);
var material003 = new THREE.MeshLambertMaterial({
    color:0x9E9E9E, side: THREE.DoubleSide, 
});
var gmesh003 = new THREE.Mesh(ggeometry003,material003);
//scene.add(gmesh03);
gmesh003.position.set(0,7,0);
gmesh003.castShadow = true; 


var caballito = new THREE.Group();
caballito.add(gmesh001,gmesh002,gmesh003);
//scene.add(caballito);
caballito.position.set(-17,20,72);
caballito.rotation.set(0,0,0.2)
caballito.castShadow = true; 

var letrero = new THREE.Group();
letrero.add(mesh01,mesh02,mesh03,mesh04,tequila,caballito);
//scene.add(letrero);

const Cartel = new THREE.Group();
Cartel.add(letrero);
Cartel.position.set(x,y,z);

return Cartel;
}


