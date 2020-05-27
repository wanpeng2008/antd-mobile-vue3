import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Test'
})
export default class Test extends Vue {

  public onChange(val) {
    console.log(val);
  }

  public render() {
    const data = [
      {value: 0, label: 'Ph.D.'},
      {value: 1, label: 'Bachelor'},
      {value: 2, label: 'College diploma'}
    ];
    return (<div>
      <m-list renderHeader={() => 'CheckboxItem demo'}>
        {data.map(i => (
          <m-checkbox-item key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </m-checkbox-item>
        ))}
        <m-checkbox-item key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          Undergraduate
          <m-list-item-brief>Auxiliary text</m-list-item-brief>
        </m-checkbox-item>
      </m-list>
      <m-flex>
        <m-flex-item>
          <m-agree-item data-seed="logId" onChange={e => console.log('checkbox', e)}>
            Agree <a onClick={(e) => {
            e.preventDefault();
            alert('agree it');
          }}>agreement</a>
          </m-agree-item>
        </m-flex-item>
      </m-flex>
    </div>);
  }
}
