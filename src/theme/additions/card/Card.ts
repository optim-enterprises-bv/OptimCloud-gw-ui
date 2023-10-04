const Card = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    minWidth: '0px',
    wordWrap: 'break-word',
    backgroundClip: 'border-box',
  },
  variants: {
    panel: (props: { colorMode: string }) => ({
      bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
      width: '100%',
      boxShadow: '1.5px 1.5px 3px 0px rgba(174, 174, 192, 0.40), -1px -1px 3px 0px #FFF',
      borderRadius: '10px',
      border: '0.5px solid none',
    }),
    widget: (props: { colorMode: string }) => ({
      bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
      width: '100%',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      border: '0.5px solid none',
    }),
  },
  defaultProps: {
    variant: 'panel',
  },
};

export default {
  components: {
    Card,
  },
};
