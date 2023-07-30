import propTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

function Container({ children, isPadding }) {
  return <ContainerWrapper isPadding={isPadding}>{children}</ContainerWrapper>;
}

Container.propTypes = {
  children: propTypes.element,
  isPadding: propTypes.bool,
};

export default Container;
