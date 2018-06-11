/**
 * If
 * @description Simply checks the passed in condition. If it is falsy, return null
 *     and does not render the wrapped component(s)
 */

export const If = ({condition, children}) => {

  if ( !condition ) return null;

  return children;

}