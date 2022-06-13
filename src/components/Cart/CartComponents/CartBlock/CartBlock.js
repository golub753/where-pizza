import { Block, Wrapper, Img, BlockTitle, Info, InfoBlock, Preview, Right, Cost } from '../CartComponents';

const CartBlock = ({img, name, price, varient}) => {
    return ( 
        <Block>
            <Wrapper>
                <Preview>
                    <Img src={img} alt={name}/>
                    <InfoBlock>
                    <BlockTitle>{name}</BlockTitle>
                    <Info>{varient}</Info> 
                    </InfoBlock>
                </Preview>
                <Right>
                    <Cost>
                        {price} BYN
                    </Cost>
                </Right>
            </Wrapper>
        </Block>
     );
}
 
export default CartBlock;