import styled from 'styled-components'

const Slider = ({ handleFontSize, fontSize }) => {
  return (
    <SliderWraper>
      <StyledSlider
        type='range'
        min={8}
        max={80}
        value={fontSize}
        onChange={(e) => handleFontSize(e.target.value)}
      />
      <div>
        <span style={{ color: 'gray', fontWeight: '500' }}>
          {fontSize}px | {(fontSize / 16).toFixed(2)} rem
        </span>
      </div>
    </SliderWraper>
  )
}

export const SliderWraper = styled.div`
  margin: 1.5rem 0;
  width: 85%;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 1rem;
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
    transition: 0.2s ease;
    :hover {
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    background-color: #2962ff;
    border: none;
    transition: 0.2s ease;
    :hover {
      transform: scale(1.1);
    }
  }
`
export default Slider
