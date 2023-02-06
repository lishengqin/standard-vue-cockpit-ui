import { debounce } from "lodash"
export function usePageScale(dom: HTMLElement = document.body, width: Number | string = 1920, height: Number | string = 1080) {
  let _width = parseFloat(width.toString())
  let _height = parseFloat(height.toString())
  dom.style.overflow = "hidden"
  dom.style.position = "relative"
  dom.style.width = _width + "px"
  dom.style.height = _height + "px"
  dom.style.transformOrigin = "0 0"
  dom.style.transition = "all 0.8s"
  const onResize = debounce(
    () => {
      dom.style.transform = `scaleX(${window.innerWidth / _width}) scaleY(${window.innerHeight / _height})`;
    },
    // @ts-ignore 
    { leading: true, trailing: true }
  );
  onResize()
  window.addEventListener('resize', onResize);
  return onResize
}
export default usePageScale