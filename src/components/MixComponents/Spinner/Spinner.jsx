import React from "react";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";

import {
  BallSpinner,
  BarsSpinner,
  CircleSpinner,
  CubeSpinner,
  DominoSpinner,
  FillSpinner,
  FireworkSpinner,
  FlagSpinner,
  GridSpinner,
  GuardSpinner,
  HeartSpinner,
  ImpulseSpinner,
  PulseSpinner,
  PushSpinner,
  SequenceSpinner,
  SphereSpinner,
  SpiralSpinner,
  StageSpinner,
  SwapSpinner,
  WaveSpinner,
  ClapSpinner,
  RotateSpinner,
  SwishSpinner,
  GooSpinner,
  CombSpinner,
  PongSpinner,
  RainbowSpinner,
  RingSpinner,
  HoopSpinner,
  FlapperSpinner,
  MagicSpinner,
  JellyfishSpinner,
  TraceSpinner,
  ClassicSpinner,
  MetroSpinner,
  WhisperSpinner,
} from "react-spinners-kit";

import { SpinnerSection } from "./SpinnerElements";

const Spinner = (loading) => {
  const spinnersList = [
    <BallSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <BarsSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <CircleSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <CubeSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <DominoSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <FillSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <FireworkSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <FlagSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <GridSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <GuardSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <HeartSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <ImpulseSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <PulseSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <PushSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <SequenceSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <SphereSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <SpiralSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <StageSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <SwapSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <WaveSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <ClapSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <RotateSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <SwishSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <GooSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <CombSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <PongSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <RainbowSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <RingSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <HoopSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <FlapperSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <MagicSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <JellyfishSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <TraceSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <ClassicSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <MetroSpinner color={"#20c20e"} SIZE={30} loading={loading} />,
    <WhisperSpinner color={"#20c20e"} SIZE={30} loading={loading} />,

    <BarLoader color={"#20c20e"} loading={loading} size={50} />,
    <BeatLoader color={"#20c20e"} loading={loading} size={15} />,
    <BounceLoader color={"#20c20e"} loading={loading} size={60} />,
    <CircleLoader color={"#20c20e"} loading={loading} size={50} />,
    <ClimbingBoxLoader color={"#20c20e"} loading={loading} size={15} />,
    <ClipLoader color={"#20c20e"} loading={loading} size={35} />,
    <ClockLoader color={"#20c20e"} loading={loading} size={50} />,
    <DotLoader color={"#20c20e"} loading={loading} size={60} />,
    <FadeLoader color={"#20c20e"} loading={loading} size={50} />,
    <GridLoader color={"#20c20e"} loading={loading} size={15} />,
    <HashLoader color={"#20c20e"} loading={loading} size={50} />,
    <MoonLoader color={"#20c20e"} loading={loading} size={60} />,
    <PacmanLoader color={"#20c20e"} loading={loading} size={25} />,
    <PropagateLoader color={"#20c20e"} loading={loading} size={15} />,
    <PuffLoader color={"#20c20e"} loading={loading} size={60} />,
    <PulseLoader color={"#20c20e"} loading={loading} size={15} />,
    <RingLoader color={"#20c20e"} loading={loading} size={60} />,
    <RiseLoader color={"#20c20e"} loading={loading} size={15} />,
    <RotateLoader color={"#20c20e"} loading={loading} size={15} />,
    <ScaleLoader color={"#20c20e"} loading={loading} size={50} />,
    <SkewLoader color={"#20c20e"} loading={loading} size={50} />,
    <SquareLoader color={"#20c20e"} loading={loading} size={50} />,
    <SyncLoader color={"#20c20e"} loading={loading} size={15} />,
  ];

  let loadingSpinner = spinnersList[Math.floor(Math.random() * spinnersList.length)];

  return (
    <div>
      <SpinnerSection>{loadingSpinner}</SpinnerSection>
    </div>
  );
};

export default Spinner;
