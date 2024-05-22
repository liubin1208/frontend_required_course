import Button from '../components/Button.vue';
import { createApp, createElementVNode } from 'vue';
import { styled } from '@styils/vue';

const DivModal = styled('div', {
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: '0',
  top: '0',
  zIndex: '99',
  background: '#00000050',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const DivBox = styled('div', {
  background: '#fff',
  color: '#333',
  padding: '1em 2em',
  borderRadius: '10px',
  boxShadow: '0 0 3px #00000080',
  display: 'flex',
  minWidth: '30%',
  flexDirection: 'column',
  alignItems: 'center',
});

const DivText = styled('div', {
  marginBottom: '1em',
});

const MessageBox = {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render(ctx) {
    const { $props, $emit } = ctx;
    return (
      <DivModal>
        <DivBox>
          <DivText>{$props.msg}</DivText>
          <Button click={$emit('onClick')}></Button>
        </DivBox>
      </DivModal>
    );
  },
};

export default function showMsg(msg, clickHandler) {
  const app = createApp(MessageBox, {
    msg,
    onClick() {
      clickHandler &&
        clickHandler(() => {
          app.unmount();
          div.remove();
        });
    },
  });
  const div = document.createElement('div');
  document.body.appendChild(div);
  app.mount(div);
}
