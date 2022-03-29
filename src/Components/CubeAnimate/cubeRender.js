import React, { Component } from "react";
import * as THREE from "three";
import style from './cube.module.css';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const clock = new THREE.Clock();

    var material = [
      new THREE.MeshBasicMaterial({
        color: 0x8126fb,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x8126fb,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xdc27fc,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshStandardMaterial({
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xdc50fc,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x8126fb,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      }),
    ];
    const cube = new THREE.Mesh(geometry, material);
    cube.position.z = -7;
    cube.rotation.x = 4;
    scene.add(cube);
    camera.position.z = -3;
    // camera.position.y = 1;

    //lights

    const pointLight1 = new THREE.PointLight(0x8125fb);
    pointLight1.position.x = 3;
    pointLight1.position.y = 1;
    pointLight1.position.z = 7;
    pointLight1.intensity = 10;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xdc27fc);
    pointLight2.position.x = 0;
    pointLight2.position.y = -3;
    pointLight2.position.z = 0;
    pointLight2.intensity = -10;
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xdc27fc);
    pointLight3.position.x = -7;
    pointLight3.position.y = 3;
    pointLight3.position.z = -8;
    pointLight3.intensity = -7;
    scene.add(pointLight3);

    //render
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;
    this.clock = clock;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    const elapsedTime = this.clock.getElapsedTime();
    this.cube.rotation.y = 0.9 * elapsedTime;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        className={style.cube}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Scene;
