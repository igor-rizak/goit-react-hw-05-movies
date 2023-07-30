import propTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

function Container({ children, isPadding }) {
  return <ContainerWrapper isPadding={isPadding}>{children}</ContainerWrapper>;
}


export default Container;
