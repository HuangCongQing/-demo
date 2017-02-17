-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2014 年 03 月 11 日 14:27
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `zhiwen`
--
CREATE DATABASE IF NOT EXISTS `zhiwen` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `zhiwen`;

-- --------------------------------------------------------

--
-- 表的结构 `question`
--

CREATE TABLE IF NOT EXISTS `question` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) CHARACTER SET utf8 NOT NULL,
  `content` text CHARACTER SET utf8,
  `user` varchar(20) CHARACTER SET utf8 NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `question`
--

INSERT INTO `question` (`id`, `title`, `content`, `user`, `date`) VALUES
(1, '', '请输入问题描述！', '', '2014-03-11 22:10:45'),
(2, '', '请输入问题描述！', 'bnbbs', '2014-03-11 22:11:15'),
(3, '', '请输入问题描述！', 'bnbbs', '2014-03-11 22:11:42'),
(4, '123123', '请输入问题描述！', 'bnbbs', '2014-03-11 22:13:10'),
(5, 'bbb', '请输入问题描述！', 'bnbbs', '2014-03-11 22:13:31'),
(6, 'aaa', '请输入问题描述！', 'bnbbs', '2014-03-11 22:15:40'),
(7, 'aaa', '请输入问题描述！', 'bnbbs', '2014-03-11 22:18:00'),
(8, 'bbbb', '请输入问题描述！', 'bnbbs', '2014-03-11 22:18:46'),
(9, 'bbb', '							<p>bbb</p>															', 'bnbbs', '2014-03-11 22:19:59'),
(10, '那些年入上百万的人是如何做到的？平均年龄是多少？', '<p>之后去的底薪40K/月的一个我认为更适合我的公司管理几百个码农。之后创业。虽然经历了连续创业失败以及生活上的种种困难导致我事实上很穷，但，我自己现在的职业目标和选择依然和薪水无关，只希望能在我自己手上做成多少年以后还能让我骄傲的事情。</p><p>我先说创业的。<br>找关系包俩工程，每个百十来万，然后各种偷工减料，花点钱搞定监理和甲方。搞定。当然了，前提是你的内心能够过得去。千万别在学校啊、路桥啊上面做手脚。会遭报应。</p><p>一个软件或服务或运营类项目订单小点的几十万，大点的几百万，更大的几千万甚至更多。<br>作为创业者，养一个十个人的team，年支出如果控制在百万里面，那么有4-5个小单子就能净利百万。有一个大单子就很 happy了。</p><p><br>在大家都能知道名字的公司里，事业部总经理、大部门总监、高级销售总监、高级客户总监等等的title基本就这个水平了，或者更低的岗位也ok。\n顶级的技术专家和产品专家也差不多。我知道一位技术大牛，中国人（准确的说是至今仍然保留中国籍），服务于国内创业小团队，月薪18万美元。<br><br>中小型公司里，如果公司业务比较良性，那么VP一级应该差不多的。顶级的销售也能轻松拿到这个薪水。</p><p>我自己在11年拿到过某浙江互联网公司（央视露脸无数次，不是阿里。。。）底薪百万／年的offer，然后觉着公司不靠谱没去，然后去混了两年娱乐圈。</p><p>我的一个曾经的老大，是我的楷模，我的管理方法甚至个人处事方法很多都在他身上学来的，农村孩子出身，历经若干大公司，自己说自己是中国打工者里面的顶级角色，在微软、腾讯等做过极高的职位。现在改行去了传统行业，年薪千万级别。他现在37岁吧。<br>我\n自己03年大学毕业，大约经过8-9年做到能够年薪百万。这里面前三年走了弯路。06年进入互联网行业从外行用最笨最努力的方式成为销售冠军，然后不停升\n职／转职，据老同事讲我至今还保持这老东家的升级记录～从纯粹的销售到现在的产品、运营、渠道、CEO，然后过程中经历若干次跳槽。到27岁成为日后一个\n大公司的总经理办公会成员。之后就有了基本保障了。直到现在。</p><p>我身边同样有很多技术牛人。06年吧，我刚刚从底薪1200转型到一个所谓的管理者，月薪可能是7K附近，那会儿我们公司的产品总监月薪28K，我都惊了。到08年我手下的产品经理薪水最高的是42K，要知道我们是17薪。<br>在一个不是特别冷门的领域里面，你能想明白别人想不明白的事情，你能解决别人解决不掉的问题，或者同样的事情你的效率比别人高的多，那么你的薪水就应该很高。至于能有多高，看你如何去争取了。</p>', 'bnbbs', '2014-03-11 22:21:39');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(20) CHARACTER SET utf8 NOT NULL,
  `pass` char(40) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 NOT NULL,
  `sex` varchar(10) CHARACTER SET utf8 NOT NULL,
  `birthday` date DEFAULT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `user`, `pass`, `email`, `sex`, `birthday`, `date`) VALUES
(1, 'bnbbs', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'bnbbs@163.com', 'male', '0000-00-00', '2014-02-27 17:16:33');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
