//>>built
define("dojo-form-controls/Textbox",["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/on","./_FormWidget"],function(c,d,b,e,f){return c([f],{templateString:'\x3cinput ${!nameAttr} type\x3d"text" value\x3d"${value}" /\x3e',postCreate:function(){this.own(e(this.domNode,"change",d.hitch(this,function(a){this.set("value",this.domNode.value)})))},_setValueAttr:function(a){b.set(this.domNode,"value",a);this._handleOnChange(a);this._set("value",a)},_setPlaceholderAttr:function(a){b.set(this.domNode,
"placeholder",a);this._set("placeholder",a)},_setAutocompleteAttr:function(a){b.set(this.domNode,"autocomplete",a?"on":"off");this._set("autocomplete",a)}})});
//@ sourceMappingURL=Textbox.js.map