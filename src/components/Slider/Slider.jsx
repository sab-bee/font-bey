import styled from 'styled-components'

const Slider = ({ handleFontSize, fontSize }) => {
  return (
    <SliderWraper>
      <RangeWraper>
        <Range
          type='range'
          min={8}
          max={80}
          value={fontSize}
          onChange={(e) => handleFontSize(e.target.value)}
        />
      </RangeWraper>
      <UnitWraper>
        <Unit>{fontSize}px | {(fontSize / 16).toFixed(2)} rem</Unit>
      </UnitWraper>
    </SliderWraper>
  )
}

const SliderWraper = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
`
const RangeWraper = styled.div`
  width: 50%;
`

const UnitWraper = styled.div``
const Range = styled.input`
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

const Unit = styled.span`
  font-weight: 500;
  color: #2196f3;
`
export default Slider
