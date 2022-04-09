
import styled from 'styled-components'

const Slider = ({ handleFontSize, fontSize}) => {

  return (
    <SliderWraper>
      <StyledSlider
        type='range'
        min={0}
        max={200}
        value={fontSize}
        onChange={(e) => handleFontSize(e.target.value)}
      />
    </SliderWraper>
  )
}

export const SliderWraper = styled.div`
  margin: 1.5rem 0;
  text-align: center;
  width: 100%;
`
const StyledSlider = styled.input`
  -webkit-appearance: none;
  height: 5px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #bdcdff;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background-color: #2962ff;
  }
`
export default Slider
