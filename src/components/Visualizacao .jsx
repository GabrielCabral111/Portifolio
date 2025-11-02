import Spline from '@splinetool/react-spline';

export default function Visualizacao() {
  return (
    <section className=" w-full h-screen overflow-hidden">
      {/* Fundo 3D do Spline */}
      <div className=" ">
        <Spline scene="https://prod.spline.design/nB7rVQXLBxMAByIu/scene.splinecode" />
      </div>
      </section>
  );
}
