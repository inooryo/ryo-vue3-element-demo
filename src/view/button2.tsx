import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  name: 'bottom2',

  setup(props) {
    let clickNumber = ref(0)
    const iconList = [
      {
        name: '我是一个小小按钮',
        url: '123123',
        bgColor: '#green',
      },
    ];

    const addNumber = () => {
      clickNumber.value += 1
    }

    return () => (
      <div class="bottomBg">
        {iconList.map((item) => <div class="iconBg">
          <div class="icon">
            <div>
              {item.name + clickNumber.value}
            </div>
          </div>
          <button onClick={addNumber} >click</button>
        </div>
        )}
      </div>
    );
  },
});
