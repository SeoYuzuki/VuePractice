export const globalMethods1 = {
    methods: {
        greet2: function () {
            console.log("yolo");
        },
        clean: function () {
            this.$refs["ref1"].setAttribute("style", "color:black");
            this.$refs["ref2"].setAttribute("style", "color:black");
            this.$refs["ref3"].setAttribute("style", "color:black");
            this.$refs["ref4"].setAttribute("style", "color:black");
        },
        nextQ: function (index,qList,ans) {
            this.clean();

            this.op1 = qList[index][3];
            this.op2 = qList[index][4];
            this.op3 = qList[index][5];
            this.op4 = qList[index][6];
            this.question = qList[index][0] + ". " + qList[index][2];
            console.log("ans:" + ans);
            return ans = qList[index][1];
            
        },
    },

}
