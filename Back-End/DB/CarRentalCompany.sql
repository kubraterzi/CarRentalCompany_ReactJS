USE [master]
GO
/****** Object:  Database [CarRentalCompany]    Script Date: 3.04.2022 10:03:53 ******/
CREATE DATABASE [CarRentalCompany]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CarRentalCompany', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\CarRentalCompany_mdf.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CarRentalCompany_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\CarRentalCompany_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [CarRentalCompany] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CarRentalCompany].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CarRentalCompany] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CarRentalCompany] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CarRentalCompany] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CarRentalCompany] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CarRentalCompany] SET ARITHABORT OFF 
GO
ALTER DATABASE [CarRentalCompany] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CarRentalCompany] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CarRentalCompany] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CarRentalCompany] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CarRentalCompany] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CarRentalCompany] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CarRentalCompany] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CarRentalCompany] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CarRentalCompany] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CarRentalCompany] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CarRentalCompany] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CarRentalCompany] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CarRentalCompany] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CarRentalCompany] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CarRentalCompany] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CarRentalCompany] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CarRentalCompany] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CarRentalCompany] SET RECOVERY FULL 
GO
ALTER DATABASE [CarRentalCompany] SET  MULTI_USER 
GO
ALTER DATABASE [CarRentalCompany] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CarRentalCompany] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CarRentalCompany] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CarRentalCompany] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CarRentalCompany] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CarRentalCompany] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [CarRentalCompany] SET QUERY_STORE = OFF
GO
USE [CarRentalCompany]
GO
/****** Object:  Table [dbo].[Brands]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brands](
	[BrandID] [int] IDENTITY(1,1) NOT NULL,
	[BrandName] [varchar](max) NULL,
	[BrandModel] [varchar](max) NULL,
 CONSTRAINT [PK_Brands] PRIMARY KEY CLUSTERED 
(
	[BrandID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cards]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cards](
	[CardId] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NULL,
	[CardNumber] [varchar](50) NULL,
	[NameOnTheCard] [varchar](50) NULL,
	[DateMonth] [int] NULL,
	[DateYear] [int] NULL,
	[CvvCode] [varchar](5) NULL,
 CONSTRAINT [PK_Cards] PRIMARY KEY CLUSTERED 
(
	[CardId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CarImages]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarImages](
	[ImageID] [int] IDENTITY(1,1) NOT NULL,
	[CarID] [int] NULL,
	[ImagePath] [varchar](max) NULL,
	[Date] [datetime] NULL,
 CONSTRAINT [PK_CarImages] PRIMARY KEY CLUSTERED 
(
	[ImageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cars]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cars](
	[CarID] [int] IDENTITY(1,1) NOT NULL,
	[BrandID] [int] NULL,
	[ColorID] [int] NULL,
	[ModelYear] [smallint] NULL,
	[DailyPrice] [decimal](18, 0) NULL,
	[Description] [varchar](max) NULL,
	[MinFindeksPoint] [int] NULL,
 CONSTRAINT [PK_Cars] PRIMARY KEY CLUSTERED 
(
	[CarID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Colors]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Colors](
	[ColorID] [int] IDENTITY(1,1) NOT NULL,
	[ColorName] [varchar](max) NULL,
 CONSTRAINT [PK_Colors] PRIMARY KEY CLUSTERED 
(
	[ColorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [varchar](max) NOT NULL,
	[FindeksPoint] [int] NULL,
	[UserID] [int] NULL,
 CONSTRAINT [PK_Table_1] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OperationClaims]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OperationClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](max) NOT NULL,
 CONSTRAINT [PK_OperationClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payments]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payments](
	[PaymentId] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NULL,
	[CardNumber] [varchar](50) NOT NULL,
	[TotalAmount] [decimal](18, 0) NOT NULL,
 CONSTRAINT [PK_Payment] PRIMARY KEY CLUSTERED 
(
	[PaymentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rentals]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rentals](
	[RentalID] [int] IDENTITY(1,1) NOT NULL,
	[CarID] [int] NULL,
	[CustomerID] [int] NULL,
	[RentDate] [date] NULL,
	[ReturnDate] [date] NULL,
 CONSTRAINT [PK_Rentals] PRIMARY KEY CLUSTERED 
(
	[RentalID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserOperationClaims]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserOperationClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[OperationClaimId] [int] NOT NULL,
 CONSTRAINT [PK_UserOperationClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 3.04.2022 10:03:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](max) NOT NULL,
	[LastName] [varchar](max) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[PasswordHash] [varbinary](500) NOT NULL,
	[PasswordSalt] [varbinary](500) NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Brands] ON 
GO
INSERT [dbo].[Brands] ([BrandID], [BrandName], [BrandModel]) VALUES (2051, N'Volkswagen', N'T-Roc')
GO
INSERT [dbo].[Brands] ([BrandID], [BrandName], [BrandModel]) VALUES (3047, N'Audi', N'Q8')
GO
INSERT [dbo].[Brands] ([BrandID], [BrandName], [BrandModel]) VALUES (3060, N'BMW', N'X3')
GO
INSERT [dbo].[Brands] ([BrandID], [BrandName], [BrandModel]) VALUES (3061, N'Mercedes', N'Amg Gt Coupe')
GO
INSERT [dbo].[Brands] ([BrandID], [BrandName], [BrandModel]) VALUES (3062, N'Volvo', N'XC 40')
GO
SET IDENTITY_INSERT [dbo].[Brands] OFF
GO
SET IDENTITY_INSERT [dbo].[Cards] ON 
GO
INSERT [dbo].[Cards] ([CardId], [CustomerId], [CardNumber], [NameOnTheCard], [DateMonth], [DateYear], [CvvCode]) VALUES (41, 2, N'3546543216546549879', N'Deneme', 2, 23, N'654')
GO
INSERT [dbo].[Cards] ([CardId], [CustomerId], [CardNumber], [NameOnTheCard], [DateMonth], [DateYear], [CvvCode]) VALUES (44, 10, N'1234567891234679877', N'Admin Admin', 3, 27, N'123')
GO
INSERT [dbo].[Cards] ([CardId], [CustomerId], [CardNumber], [NameOnTheCard], [DateMonth], [DateYear], [CvvCode]) VALUES (45, 10, N'1234567891234679877', N'Admin Admin', 3, 27, N'123')
GO
INSERT [dbo].[Cards] ([CardId], [CustomerId], [CardNumber], [NameOnTheCard], [DateMonth], [DateYear], [CvvCode]) VALUES (46, 10, N'1234567891234679877', N'Admin Admin', 3, 27, N'123')
GO
INSERT [dbo].[Cards] ([CardId], [CustomerId], [CardNumber], [NameOnTheCard], [DateMonth], [DateYear], [CvvCode]) VALUES (47, 10, N'1234567891234679877', N'Admin Admin', 3, 27, N'123')
GO
INSERT [dbo].[Cards] ([CardId], [CustomerId], [CardNumber], [NameOnTheCard], [DateMonth], [DateYear], [CvvCode]) VALUES (48, 10, N'1234567891234679877', N'Admin Admin', 3, 27, N'123')
GO
SET IDENTITY_INSERT [dbo].[Cards] OFF
GO
SET IDENTITY_INSERT [dbo].[CarImages] ON 
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (92, 258, N'Images/d9ea9c79d4ab492ba74bf678d9731b4e.PNG', CAST(N'2021-04-07T00:20:48.890' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (93, 258, N'Images/e53a0ffc6f484f228e80de5597289b46.PNG', CAST(N'2021-04-07T00:20:48.907' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (94, 258, N'Images/6e1341599f934e5fbe5e75e98615dd9d.PNG', CAST(N'2021-04-07T00:20:48.920' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (95, 258, N'Images/4f5da6cc9cd946cfbe12437468393815.PNG', CAST(N'2021-04-07T00:20:48.933' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (96, 258, N'Images/2232d255fbc9411084498aedec527dee.PNG', CAST(N'2021-04-07T00:20:48.953' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (97, 255, N'Images/04c88fd9ba6c483abb6b4463c1dc590c.jpeg', CAST(N'2021-04-07T00:21:44.563' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (98, 255, N'Images/7f49f7d1b2fe4f73ac1518e9998bd718.jpeg', CAST(N'2021-04-07T00:21:44.577' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (99, 255, N'Images/d27451a353c24374adbcd7bc1d05690e.jpeg', CAST(N'2021-04-07T00:21:44.587' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (100, 255, N'Images/543a59c9d2e441a0bbd0c9ae81f98a64.jpeg', CAST(N'2021-04-07T00:21:44.597' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (101, 255, N'Images/e1f2c89ef5b44ba7869f2e43fa711ece.jpg', CAST(N'2021-04-07T00:21:44.603' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (102, 256, N'Images/2dafc05a6c8140838b4faa9a5f998652.jpeg', CAST(N'2021-04-07T00:22:14.180' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (103, 256, N'Images/a00c666d810546fb82abf8937d40db88.jpeg', CAST(N'2021-04-07T00:22:14.197' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (104, 256, N'Images/139a5c5f778645e7a94b2513365d1772.jpeg', CAST(N'2021-04-07T00:22:14.210' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (105, 256, N'Images/5c299ff890a8453fa142b88fa41887e8.jpeg', CAST(N'2021-04-07T00:22:14.227' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (106, 257, N'Images/ffe4c7bd9b104c2aac496740a187f114.jpeg', CAST(N'2021-04-07T00:22:32.480' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (107, 257, N'Images/14d048047ea947c68a4864110ecd9529.jpeg', CAST(N'2021-04-07T00:22:32.493' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (108, 257, N'Images/7b303fa51d1741a983be23bb4da54b8a.jpeg', CAST(N'2021-04-07T00:22:32.507' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (109, 257, N'Images/fd683b768b75400f910e57da2d279efa.jpeg', CAST(N'2021-04-07T00:22:32.517' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (110, 257, N'Images/90fa3ecb480943be8ec0dc31c7927e8c.jpg', CAST(N'2021-04-07T00:22:32.523' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (111, 258, N'Images/3b1c12729962499ab16130c38d52c25f.PNG', CAST(N'2021-04-07T00:22:59.133' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (112, 258, N'Images/57c07f2c12354e24ac3b88b9359ee73e.PNG', CAST(N'2021-04-07T00:22:59.150' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (113, 258, N'Images/7490f8a87abe4cc0802b17ee29cbb461.PNG', CAST(N'2021-04-07T00:22:59.163' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (114, 258, N'Images/82e5bf50ed744b4bb35152a06305dccd.PNG', CAST(N'2021-04-07T00:22:59.170' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (115, 258, N'Images/b08db6337b824475bc176ba44446915a.PNG', CAST(N'2021-04-07T00:22:59.183' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (116, 260, N'Images/75c1df7a3329441eb967beba9a511e7c.jpg', CAST(N'2021-04-07T00:23:32.317' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (117, 260, N'Images/e5886a1373fe4eb39d434a0d563b31cd.jpg', CAST(N'2021-04-07T00:23:32.333' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (118, 260, N'Images/fefe2f10b8924b768319beffb5407bcd.jpg', CAST(N'2021-04-07T00:23:32.340' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (119, 260, N'Images/476939f517994ea990befc64c6d87182.jpg', CAST(N'2021-04-07T00:23:32.347' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (120, 261, N'Images/7fefeca61fa34894ab27ef4d04af6815.jpg', CAST(N'2021-04-07T00:23:48.597' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (121, 261, N'Images/377d2a8d492a4dbb8c79815ead81cebb.jpg', CAST(N'2021-04-07T00:23:48.610' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (122, 261, N'Images/55cecf5eeeb843cab8b79c50e0736c22.jpg', CAST(N'2021-04-07T00:23:48.623' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (123, 261, N'Images/81f9ddd50dad4d38ba3b5c8a0af09f60.jpg', CAST(N'2021-04-07T00:23:48.637' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (124, 261, N'Images/452259d63964436fac9077d43390e737.jpg', CAST(N'2021-04-07T00:23:48.643' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (125, 262, N'Images/994b86a217c0478abe359be0ae57ebd6.PNG', CAST(N'2021-04-07T00:24:06.390' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (126, 262, N'Images/734dcaf208ad4c4b92da7176e8099208.PNG', CAST(N'2021-04-07T00:24:06.403' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (127, 262, N'Images/a42787434b544468acd5b04ee7e4014d.PNG', CAST(N'2021-04-07T00:24:06.413' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (128, 262, N'Images/abf323fae9dd4a2d84cc5ea13d10b9cf.PNG', CAST(N'2021-04-07T00:24:06.427' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (129, 262, N'Images/a1da77f23d2e4250906bb5e10a0e1afc.PNG', CAST(N'2021-04-07T00:24:06.433' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (130, 253, N'Images/6166cb566b8a460dbd03de4ff4d515b7.webp', CAST(N'2021-04-07T00:26:43.270' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (131, 253, N'Images/27210a83c421429c83ce929bb6026665.webp', CAST(N'2021-04-07T00:26:43.287' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (132, 253, N'Images/36153614e9bf40a5890d9dbe5b84d019.webp', CAST(N'2021-04-07T00:26:43.300' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (133, 253, N'Images/7caacef979314787921b60b8662d95ef.webp', CAST(N'2021-04-07T00:26:43.310' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (134, 253, N'Images/0ec1b3ad16654968b043890b9262582f.webp', CAST(N'2021-04-07T00:26:43.323' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (135, 254, N'Images/2383f1833b004858accb642e89280cd0.webp', CAST(N'2021-04-07T00:27:27.213' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (136, 254, N'Images/1f99d24d79c94917b1c79b57efd096e2.webp', CAST(N'2021-04-07T00:27:27.230' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (137, 254, N'Images/b7456a0ef7984d238699fc592eb97614.webp', CAST(N'2021-04-07T00:27:27.247' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (138, 254, N'Images/87d9c0f68f0d4dcb8eff1e71159b65ea.webp', CAST(N'2021-04-07T00:27:27.257' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (139, 254, N'Images/58a6e6eded874c3ca8813b366c90d86b.webp', CAST(N'2021-04-07T00:27:27.273' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (140, 263, N'Images/aada90f02fa6432995e18a61fb5beb5e.PNG', CAST(N'2021-04-07T00:28:42.440' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (141, 263, N'Images/fca23737492f492ea28d52e5dc6d6d04.PNG', CAST(N'2021-04-07T00:28:42.460' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (142, 263, N'Images/e4fa227666af4d209baa17b4fd81054b.PNG', CAST(N'2021-04-07T00:28:42.470' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (143, 263, N'Images/96e14c438e4346358b6a1e0abe3d72c2.PNG', CAST(N'2021-04-07T00:28:42.483' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (144, 263, N'Images/8046f1778b3247078161785d09ed20e0.PNG', CAST(N'2021-04-07T00:28:42.497' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (145, 264, N'Images/2fc306195ef046fe88ebe5de34bb585b.PNG', CAST(N'2021-04-10T18:29:33.683' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (146, 264, N'Images/539ca0c257e949feaf2ef843ce6afefe.PNG', CAST(N'2021-04-10T18:29:33.773' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (147, 264, N'Images/da5280693dbd46eaa8cbce075723d8c4.PNG', CAST(N'2021-04-10T18:29:33.787' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (148, 264, N'Images/05078fd5cec6412d8c1a76d96c68b9fb.PNG', CAST(N'2021-04-10T18:29:33.797' AS DateTime))
GO
INSERT [dbo].[CarImages] ([ImageID], [CarID], [ImagePath], [Date]) VALUES (149, 264, N'Images/bf0278f5796c4846830ad0d7b92725e6.PNG', CAST(N'2021-04-10T18:29:33.810' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[CarImages] OFF
GO
SET IDENTITY_INSERT [dbo].[Cars] ON 
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (253, 3062, 1049, 2021, CAST(220 AS Decimal(18, 0)), N'5 Adult - 2 Suitcase - Diesel', 0)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (254, 3062, 1051, 2022, CAST(210 AS Decimal(18, 0)), N'4 Adult - 3 Suitcase - Gasoline', 700)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (255, 3061, 1005, 2021, CAST(230 AS Decimal(18, 0)), N'5 Adult - 2 Suitcase - Diesel', 660)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (256, 3061, 1049, 2021, CAST(220 AS Decimal(18, 0)), N'4 Adult - 3 Suitcase - Gasoline', 770)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (257, 3061, 1050, 2022, CAST(240 AS Decimal(18, 0)), N'5 Adult - 2 Suitcase - Diesel', 520)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (258, 3060, 1051, 2019, CAST(220 AS Decimal(18, 0)), N'4 Adult - 3 Suitcase - Gasoline', 810)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (260, 2051, 1004, 2021, CAST(240 AS Decimal(18, 0)), N'4 Adult - 3 Suitcase - Gasoline', 1200)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (261, 2051, 1005, 2020, CAST(230 AS Decimal(18, 0)), N'5 Adult - 2 Suitcase - Diesel', 1250)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (262, 2051, 2050, 2020, CAST(220 AS Decimal(18, 0)), N'5 Adult - 2 Suitcase - Diesel', 900)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (263, 3047, 2049, 2021, CAST(240 AS Decimal(18, 0)), N'4 Adult - 3 Suitcase - Gasoline', 700)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (264, 3047, 1052, 2021, CAST(210 AS Decimal(18, 0)), N'4 Adult - 3 Suitcase - Gasoline', 1250)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (273, 3062, 1049, 2021, CAST(220 AS Decimal(18, 0)), N'Deneme yapiyorum.', 0)
GO
INSERT [dbo].[Cars] ([CarID], [BrandID], [ColorID], [ModelYear], [DailyPrice], [Description], [MinFindeksPoint]) VALUES (274, 3062, 1049, 2021, CAST(220 AS Decimal(18, 0)), N'Deneme yapiyorum.', 0)
GO
SET IDENTITY_INSERT [dbo].[Cars] OFF
GO
SET IDENTITY_INSERT [dbo].[Colors] ON 
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (1004, N'Yellow')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (1005, N'Blue')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (1006, N'Black')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (1049, N'Red')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (1050, N'Silver')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (1051, N'White')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (1052, N'Beige')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (2049, N'Metalic Dragon Orange')
GO
INSERT [dbo].[Colors] ([ColorID], [ColorName]) VALUES (2050, N'Metalic Grey')
GO
SET IDENTITY_INSERT [dbo].[Colors] OFF
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 
GO
INSERT [dbo].[Customers] ([CustomerID], [CompanyName], [FindeksPoint], [UserID]) VALUES (1, N'AfredsFlutter', 1000, 11)
GO
INSERT [dbo].[Customers] ([CustomerID], [CompanyName], [FindeksPoint], [UserID]) VALUES (2, N'Yang Wang', 1000, 12)
GO
INSERT [dbo].[Customers] ([CustomerID], [CompanyName], [FindeksPoint], [UserID]) VALUES (8, N'Kübra Terzi', 1000, 14)
GO
INSERT [dbo].[Customers] ([CustomerID], [CompanyName], [FindeksPoint], [UserID]) VALUES (9, N'Elif Terzi', 1000, 15)
GO
INSERT [dbo].[Customers] ([CustomerID], [CompanyName], [FindeksPoint], [UserID]) VALUES (10, N'Fatih Kayan', 1000, 16)
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[OperationClaims] ON 
GO
INSERT [dbo].[OperationClaims] ([Id], [Name]) VALUES (1, N'admin')
GO
INSERT [dbo].[OperationClaims] ([Id], [Name]) VALUES (3, N'moderator')
GO
SET IDENTITY_INSERT [dbo].[OperationClaims] OFF
GO
SET IDENTITY_INSERT [dbo].[Payments] ON 
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (30, 2, N'1111111111111111111', CAST(440 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (31, 2, N'1111111111111111111', CAST(460 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (32, 2, N'1111111111111111111', CAST(440 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (33, 2, N'123451234512345', CAST(480 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (34, 2, N'6545164649649846516', CAST(0 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (35, 2, N'3546543216546549879', CAST(0 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (36, 2, N'3546543216546549879', CAST(0 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (37, 2, N'3546543216546549879', CAST(440 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (38, 2, N'3546543216546549879', CAST(420 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (39, 2, N'1111111111111111111', CAST(720 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (40, 10, N'1234567891234679877', CAST(630 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (41, 10, N'1234567891234679877', CAST(720 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (42, 10, N'1234567891234679877', CAST(720 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (43, 10, N'1234567891234679877', CAST(720 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (44, 10, N'1234567891234679877', CAST(720 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (45, 10, N'1234567891234679877', CAST(480 AS Decimal(18, 0)))
GO
INSERT [dbo].[Payments] ([PaymentId], [CustomerId], [CardNumber], [TotalAmount]) VALUES (46, 10, N'1234567891234679877', CAST(720 AS Decimal(18, 0)))
GO
SET IDENTITY_INSERT [dbo].[Payments] OFF
GO
SET IDENTITY_INSERT [dbo].[Rentals] ON 
GO
INSERT [dbo].[Rentals] ([RentalID], [CarID], [CustomerID], [RentDate], [ReturnDate]) VALUES (7151, 253, 2, CAST(N'2021-04-20' AS Date), NULL)
GO
INSERT [dbo].[Rentals] ([RentalID], [CarID], [CustomerID], [RentDate], [ReturnDate]) VALUES (7152, 255, 2, CAST(N'2021-04-11' AS Date), NULL)
GO
INSERT [dbo].[Rentals] ([RentalID], [CarID], [CustomerID], [RentDate], [ReturnDate]) VALUES (7156, 254, 10, CAST(N'2021-04-12' AS Date), CAST(N'2021-04-14' AS Date))
GO
INSERT [dbo].[Rentals] ([RentalID], [CarID], [CustomerID], [RentDate], [ReturnDate]) VALUES (7157, 257, 10, CAST(N'2021-04-12' AS Date), CAST(N'2021-04-13' AS Date))
GO
SET IDENTITY_INSERT [dbo].[Rentals] OFF
GO
SET IDENTITY_INSERT [dbo].[UserOperationClaims] ON 
GO
INSERT [dbo].[UserOperationClaims] ([Id], [UserId], [OperationClaimId]) VALUES (3, 11, 1)
GO
INSERT [dbo].[UserOperationClaims] ([Id], [UserId], [OperationClaimId]) VALUES (6, 14, 1)
GO
INSERT [dbo].[UserOperationClaims] ([Id], [UserId], [OperationClaimId]) VALUES (7, 16, 1)
GO
SET IDENTITY_INSERT [dbo].[UserOperationClaims] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [PasswordHash], [PasswordSalt], [Status]) VALUES (11, N'Kübra', N'Terzi', N'kubraterzi@gmail.com', 0xF5EDE0066EDD39CCABA8915390089B32A0D481421608B86A0CD252EF6FE6A20F6AF0C8C92E162777CF7882FA81E09F0ED1CB494D72280F6B10DE9BC25614BF22, 0xDD6FD449093F017F88818400A03D743013B2A240E59031BFF31D92DB3D9C0EA5E36A693D1B2CE959CDF9FD900587C0E1FB44887283DA21F173CB2BBC4A01579F63AEC6766FEF92069D51871814A96316663833F93E3B34C1AA1F6EC434F39BC3A5EBF6C449A761C7C00CB87F1953B55BEA31A3E7B90E67B3A09BEF170FC60CB4, 1)
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [PasswordHash], [PasswordSalt], [Status]) VALUES (12, N'Elif', N'Terzi', N'elifterzi@gmail.com', 0xFF75CEFA41F5B0FC33928D66842422D5A00812589D7433FB2AF8B01FE40CBDEBD293D28D13FE68FE1A50A40BC437350C00B113C4FFAA9E84CB9F49BD8F3BF019, 0xAF1A4870FFB0146C288CF6FBB35686968280C45EC3EFEC443F109E6C8AC4BA21F8CD0818C448677D6B19CA50340B806898B8911309C9414330817C1A8DA65BE0DF3DBC8FA82B31C3F1D1E753DC41762452F3E9D2CF4844D37C89A5820CE1D8DEA23C3E58303826E4851CA6AD4B66E624B470B5DCBAC61F60ED6E203885B786C2, 1)
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [PasswordHash], [PasswordSalt], [Status]) VALUES (13, N'Fatih', N'Kayan', N'fatihkayan@gmail.com', 0xDBBB52C0EAA63B9217993F57C6FE9F7A49C372DD0E9182FD742683BC44F9D82CC423325A15D7870F6C6E60C1346319E740F669E29D10E4D9E055269007C63E9F, 0xEA3153E66C09603EFF0FBAEB2412B2E0B38EB8D5965866AE77288758A4AD9A69D908D6E8D22B69674FF268B26509B9724AE843D175D58812C4642C0B591A1A58445E56A9904A3586E961DEFF961890F97E76EC8F7FBAB9E741730739BBC90DCE7C78BF2E112A919B0D70790D3B468F280FD4560E3281F2AB6BE7043B5E5F5EF1, 1)
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [PasswordHash], [PasswordSalt], [Status]) VALUES (14, N'Admin', N'Admin', N'admin@admin.com', 0x0173F12F51D24E600C32A9CB8D1F1BDA89CFD76928670C955DBC98728D1D8E7F797D533EFBE605D09C929D25FA63E64A6261FFBCD4A264111762146D210222EA, 0xE295931BA8A58241E4C198245A77ABC640E6C5571473FDC59C427915B2F2CBF942A003A924920FC1C5134EF877A4AB1748561BA4434D6A268FD262CC0B857EA693026103EA52FEE890702FE6DB39BBAF32164AEF35C828CBD19335080EFEB8256BD7FBB8B3047256DF0F82BE1E6AC3D5BC3B862D7FC2D94FF90C76039CC2BB00, 1)
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [PasswordHash], [PasswordSalt], [Status]) VALUES (15, N'Customer', N'Customer', N'customer@customer.com', 0x3A11BB134B6CC9062FC6811024CB1422A9A734DDF0F4F557AA463763AB2786778693A8992F4275442AF80A0673B58F737B6BE1C055D9425C631AA69A86B29467, 0x298E3AAFED092322C87EF02E388E7A476BD0334E3117A8B19BE291A9B3060A415E63C614DF8B3DAD3B1D10B7C2435F3CF635C8827D87424FABD70F060D47FF8C0BE329BDDDDC0B7CB00FD402DE498A3D280FB6D94669A56C38E7D604116C5AAD2F2D2E56CE53AA33AEE088BFC79B81729C112E27D21721557272F4CBA39C4AAD, 1)
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [PasswordHash], [PasswordSalt], [Status]) VALUES (16, N'UserDemo', N'User', N'user@user.com', 0x6FA8CD3829DBD6BD7D8E051D5E504FA1D74306D461CCF214BC1930C2A0636448431CA06438C76CD146FA4648BEF3D57A09A5BA24E65ACFA441FEE074F1208A4B, 0xC01CABB6F4A517BC6BF2C5AFA99D3AD68EC1056E35685DC5EE3D1545C44D42C81637B0F9131C2A1DF010A42C842D9D6A26FC57F8E1D8D873A2CEF1488FA10CCB586458E567ACE3158DB125E5234AD5A497C58FA55278E73C0A890AE4C5C73C797CC1117B8F2A4EA9A3364D9C8FCC104B4E67E79981F3665920B65E5A569F60AE, 1)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Cards]  WITH CHECK ADD  CONSTRAINT [FK_Cards_Customers1] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
ALTER TABLE [dbo].[Cards] CHECK CONSTRAINT [FK_Cards_Customers1]
GO
ALTER TABLE [dbo].[CarImages]  WITH CHECK ADD  CONSTRAINT [FK_CarImages_Cars] FOREIGN KEY([CarID])
REFERENCES [dbo].[Cars] ([CarID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[CarImages] CHECK CONSTRAINT [FK_CarImages_Cars]
GO
ALTER TABLE [dbo].[Cars]  WITH CHECK ADD  CONSTRAINT [FK_Cars_Brands] FOREIGN KEY([BrandID])
REFERENCES [dbo].[Brands] ([BrandID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Cars] CHECK CONSTRAINT [FK_Cars_Brands]
GO
ALTER TABLE [dbo].[Cars]  WITH CHECK ADD  CONSTRAINT [FK_Cars_Colors] FOREIGN KEY([ColorID])
REFERENCES [dbo].[Colors] ([ColorID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Cars] CHECK CONSTRAINT [FK_Cars_Colors]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Users]
GO
ALTER TABLE [dbo].[Payments]  WITH CHECK ADD  CONSTRAINT [FK_Payments_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
ALTER TABLE [dbo].[Payments] CHECK CONSTRAINT [FK_Payments_Customers]
GO
ALTER TABLE [dbo].[Rentals]  WITH CHECK ADD  CONSTRAINT [FK_Rentals_Cars] FOREIGN KEY([CarID])
REFERENCES [dbo].[Cars] ([CarID])
GO
ALTER TABLE [dbo].[Rentals] CHECK CONSTRAINT [FK_Rentals_Cars]
GO
ALTER TABLE [dbo].[Rentals]  WITH CHECK ADD  CONSTRAINT [FK_Rentals_Customers1] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
ALTER TABLE [dbo].[Rentals] CHECK CONSTRAINT [FK_Rentals_Customers1]
GO
ALTER TABLE [dbo].[UserOperationClaims]  WITH CHECK ADD  CONSTRAINT [FK_UserOperationClaims_OperationClaims] FOREIGN KEY([OperationClaimId])
REFERENCES [dbo].[OperationClaims] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserOperationClaims] CHECK CONSTRAINT [FK_UserOperationClaims_OperationClaims]
GO
ALTER TABLE [dbo].[UserOperationClaims]  WITH CHECK ADD  CONSTRAINT [FK_UserOperationClaims_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserOperationClaims] CHECK CONSTRAINT [FK_UserOperationClaims_Users]
GO
USE [master]
GO
ALTER DATABASE [CarRentalCompany] SET  READ_WRITE 
GO
