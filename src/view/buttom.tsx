import { defineComponent, ref, reactive } from 'vue';
import button2 from "./button2";
export default defineComponent({
  name: 'bottom',
  components:{
    button2
  },
  props: {
    index: {
      type: Number,
      default: 2,
    },
  },


  setup(props) {
    const btnList = [
      {
        name: '我是一个小按钮',
        color: 'color: green',
      },
    ];
    const comName = < button2 />
    return () => (
      <div>
        {btnList.map((item) => <div>
          <div style={item.color}>
              <div>
                {item.name}
                {comName}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
});
