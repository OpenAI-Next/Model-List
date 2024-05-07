# 一、介绍

本项目为 **OpenAI Next 产业联盟** 提供最新的模型列表、模型参数等信息。

当然，你也可以直接使用这个服务，获取最新的模型列表、模型参数、模型价格等信息。

# 二、使用方法

## 1. 直接使用
服务地址：`https://api.openai-next.com`

## 2. 部署到自己的服务器
```
# 克隆项目
git clone https://github.com/OpenAI-Next/Model-List.git

# 进入目录
cd Model-List

# 拉取镜像并运行
docker-compose up -d

# 配置反向代理（可选，默认暴露端口为 3000）
```

# 接口列表

## 1. 模型相关
### 1.1 获取模型列表
- **请求方式**：`GET`
- **接口地址**：`/models`
- **返回格式**：
```json
[
  {
    "provider": "string",    // 模型提供商的名称
    "docsUrl": "string",     // 模型提供商的文档链接
    "categories": [          // 模型提供商提供的模型类别数组
      {
        "category": "string", // 模型类别的名称
        "models": [           // 该类别下的模型数组
          {
            "name": "string",          // 模型的名称
            "description": "string",   // 模型的描述信息
            "config": {                // 模型的配置信息
              "maxTokens": number,     // 最大令牌数
              "maxContext": number,    // 最大上下文长度
              "maxResponse": number,   // 最大响应长度
              "maxTemperature": number,// 最大温度值
              "functionCall": boolean, // 是否支持函数调用
              "vision": boolean        // 是否支持视觉功能
            },
            "pricing": {             // 模型的定价信息
              "inputPrice": number,    // 输入价格（每1M令牌）
              "outputPrice": number    // 输出价格（每1M令牌）
            }
          }
        ]
      }
    ]
  }
]
```

# 注意事项
