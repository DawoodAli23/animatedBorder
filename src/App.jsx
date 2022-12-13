function App({
  outerDivWidth = "200px",
  outerDivHeight = "200px",
  outerDivBorderRadius = "10px",
  outlineHeight = "256px",
  outlineWidth = "128px",
  outlineThickness = "6px",
}) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`relative flex h-[${outerDivHeight}] w-[${outerDivWidth}] items-center justify-center overflow-hidden rounded-[${outerDivBorderRadius}]`}
      >
        <div
          className={`absolute bottom-[${`${
            outerDivHeight.split("p")[0] / 2
          }px`}] z-[1] h-[${outlineHeight}] w-[${outlineWidth}] origin-bottom animate-spin-slow bg-pink-600 duration-100`}
        />
        <div
          className={`relative z-[2] bg-white h-[${`${
            outerDivHeight.split("p")[0] - outlineThickness.split("p")[0]
          }px`}] w-[${`${
            outerDivHeight.split("p")[0] - outlineThickness.split("p")[0]
          }px`}] rounded-[${`${Math.abs(
            outerDivBorderRadius.split("p")[0] - 3
          )}px`}]`}
        ></div>
      </div>
    </div>
  );
}

export default App;
