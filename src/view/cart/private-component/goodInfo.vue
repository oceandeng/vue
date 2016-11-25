<template>
	<div>
		<figcaption>
			<div>
				<h3 class="good-tit">H5秀场</h3>
				<span class="good-tip">已购买  次</span>
			</div>
			<p class="good-sub-tit">H5秀场，您的企业营销利器。</p>
			<p class="good-desc">资深设计师为您设计精美企业秀，传播企业形象。</p>
			<p class="good-desc">多套免费模板，自己制作企业秀。输出更多企业秀</p>
	    </figcaption>
	</div>
</template>
<script>
	export default {
		name: 'good-detail',
		mounted() {}
	}
</script>
<style scoped>
    figcaption{
        font-size: 12px;
    }
    figcaption  h3{
        margin: 5px 0 10px 0;
    }
    figcaption  p{
        margin: 0;
    }
    .good-tit{
        font-size: 18px;
        color: #666;
        display: inline-block;
    }
    .good-tip{
        color: #ccc;
    }
    .good-sub-tit{
        color: #666;
    }
    .good-desc{
        color: #999;
    }
</style>