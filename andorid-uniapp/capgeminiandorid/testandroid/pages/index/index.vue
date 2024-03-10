<template>
	<view class="index">
		<bookheader></bookheader>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search">
					<text class="iconfont icon-fangdajing"></text>
					<input type="text" v-model="searchVal" placeholder="please input bookname" />
					<button class="uni-button" size="mini" type="primary" @tap="handleToSearch">Search</button>
				</view>
				<view>
					<template>
						<view>
							<view class="uni-container">
								<uni-table ref="table" :loading="loading" border stripe emptyText="empty data">
									<uni-tr>
										<uni-th width="50" align="center">Index</uni-th>
										<uni-th width="50" align="center">BookName</uni-th>

										<uni-th width="140" align="center">set</uni-th>
									</uni-tr>
									<uni-tr v-for="(item, index) in bookList" :key="index">
										<uni-td align="center">{{ item.bookId }}</uni-td>
										<uni-td align="center">{{ item.bookTitle }}
										</uni-td>

										<uni-td>
											<view class="uni-group">
												<button class="uni-button" size="mini" type="primary">new</button>
												<button class="uni-button" size="mini" type="primary" @click="onClickEditButton(item.bookId)">modify</button>
												<button class="uni-button" size="mini" type="warn"  @click="onClickDeleteButton(item.bookId)">delte</button>
											</view>
										</uni-td>
									</uni-tr>
								</uni-table>
								
							</view>
						</view>
					</template>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		bookList
	} from '@/common/api.js';
	import bookheader from '@/components/bookheader/bookheader.vue';

	export default {
		data() {
			return {
				bookList: [],
				searchVal: '',
				pageSize: 10,
				pageCurrent: 1,
				total: 0,
				loading: false,
				queryParams: {
					bookTitle: null,
				},
			};
		},
		components: {
			bookheader,
		},

		onLoad() {
			bookList().then((res) => {
				this.bookList = res.data;
			});
		},
		methods: {
			handleToSearch() {     //search
				let val = this.searchVal;
				if (val == '') {
					bookList().then((res) => {
						this.bookList = res.data;
					});
				} else {
					bookList(val).then((res) => {
						this.bookList = res.data;
					});
				}
			},
			onClickEditButton(val) {
			   const valueToPass = val;
			  uni.navigateTo({
			    url: '/pages/edit/edit'+'?bookId='+val
			  });
			} 

		}
		 
	};
</script>

<style scoped>
	.index {
		/* 整体样式 */
	}

	.index-search {
		/* 搜索框样式 */
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;
	}

	.index-search text {
		/* 搜索图标样式 */
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 28rpx;
	}

	.index-search input {
		/* 输入框样式 */
		font-size: 28rpx;
		flex: 1;
	}

	.index-list {
		/* 列表样式 */
		margin: 0 30rpx;
	}

	.index-list-item {
		/* 列表项样式 */
		display: flex;
		margin-bottom: 34rpx;
	}

	.index-list-img {
		/* 图片样式 */
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 22rpx;
	}

	.index-list-img image {
		/* 图片内容样式 */
		width: 100%;
		height: 100%;
	}

	.index-list-img text {
		/* 图片下方文本样式 */
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: white;
		font-size: 20rpx;
	}

	.index-list-text {
		/* 文本样式 */
		font-size: 24rpx;
		line-height: 66rpx;
	}
</style>