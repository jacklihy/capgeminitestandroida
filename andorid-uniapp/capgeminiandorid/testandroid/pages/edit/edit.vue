<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">BookName</view>
					<input class="uni-input" focus placeholder="Please Input BookName" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">BookAuth</view>
					<input class="uni-input" focus placeholder="Please Input BookAuth" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">Book Content</view>
					<input class="uni-input" focus placeholder="Please Input BookContent" />
				</view>
				<view class="uni-title uni-common-pl">DatePicker</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							Current select
						</view>
						<view class="uni-list-cell-db">
							<picker mode="date" :value="date" :start="startDate" :end="endDate"
								@change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
					</view>
				</view>
		
		<view class="content">
			<textarea class="textarea" v-model="txt"></textarea>
		</view>

		<view class="uni-btn-v">
			<button form-type="submit">Submit</button>
			<button type="default" form-type="reset">Reset</button>
		</view>
		</form>
	</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>
<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>