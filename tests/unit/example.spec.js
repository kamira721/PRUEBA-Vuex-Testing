import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';

describe('Prueba al componente NavBar.vue', () => {
  it('prueba N3', () => {
    const wrapper = shallowMount(NavBar);

    let buttonNav = wrapper.find("button");
    expect(buttonNav.element.type).toBe("button");   
  })
})
