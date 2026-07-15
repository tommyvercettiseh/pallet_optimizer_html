import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const context={window:{},performance:{now:()=>0}};
vm.createContext(context);
vm.runInContext(fs.readFileSync('assets/optimizer.js','utf8'),context);
const {calculate}=context.window.PalletOptimizer;

const base={pallet_id:'euro',box_length_mm:400,box_width_mm:300,box_height_mm:250,max_total_height_mm:1800,custom_pallet_length_mm:0,custom_pallet_width_mm:0,custom_pallet_height_mm:0};
const result=calculate(base);
assert.equal(result.boxes_per_layer,8);
assert.equal(result.layers,6);
assert.equal(result.boxes_per_pallet,48);
assert.equal(result.load_height_mm,1644);
assert.ok(result.layout.every(box=>box.x_mm>=0&&box.y_mm>=0));

const rotated=calculate({...base,box_length_mm:800,box_width_mm:400});
assert.equal(rotated.boxes_per_layer,3);

const custom=calculate({...base,pallet_id:'custom',custom_pallet_length_mm:1000,custom_pallet_width_mm:1000,custom_pallet_height_mm:150});
assert.equal(custom.pallet.name,'Custom pallet');
assert.ok(custom.boxes_per_layer>0);

console.log('Optimizer regression tests passed.');
