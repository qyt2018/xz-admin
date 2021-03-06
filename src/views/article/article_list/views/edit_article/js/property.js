export default {
  data() {
    return {
      typeList: [],
      coverImage: "",
      articleForm: {
				id: this.$route.query.id,
        title: "",
        types: [{
      		name: "",
      		id: ""
      	}],
        content: "",
      	coverImage: "",
      	labels: "",
        sort: 999,
        isShow: true,
        isTop: false
      },
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      rules: {
        title: [
          { required: true, message: "请输入资讯标题", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "change" }
        ],
        type: [
          { required: true, message: "请选择资讯分类", trigger: "blur" }
        ],
        sort: [
          { required: true, message: "请输入排序号码", trigger: "blur" }
        ],
        content: [
          { required: true, message: "请输入资讯内容", trigger: "blur" }
        ]
      },
      buttonOptions: [{
        type: "primary",
        title: "确认",
        name: "确认",
        method: "submitForm"
      }, {
        type: "info",
        title: "重置",
        name: "重置",
        method: "resetForm"
      }]
    }
  }
}